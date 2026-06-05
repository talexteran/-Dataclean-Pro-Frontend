const express = require('express');
const { MercadoPagoConfig, Preference, Payment } = require('mercadopago');
const app = express();

app.use(express.json());

// ─── CSP ──────────────────────────────────────────────────────────────────────
// El Wallet Brick usa infraestructura compartida MP + MercadoLibre.
// mlstatic.com sirve los assets del Brick.
// mercadolibre.com / mercadolivre.com manejan sesión y antifraude.
// Sin estos dominios el Brick lanza "initialization failed".
app.use((req, res, next) => {
  const ML = [
    'https://*.mercadopago.com',
    'https://*.mercadopago.com.co',
    'https://mercadopago.com.co',
    'https://www.mercadopago.com',
    'https://sdk.mercadopago.com',
    'https://*.mercadolibre.com',
    'https://www.mercadolibre.com',
    'https://*.mercadolivre.com',
    'https://*.mlstatic.com',
    'https://api.mercadolibre.com',
  ].join(' ');

  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    `script-src 'self' ${ML} 'unsafe-inline' 'unsafe-eval'`,
    `script-src-elem 'self' ${ML} 'unsafe-inline'`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    `font-src 'self' https://fonts.gstatic.com ${ML}`,
    `frame-src ${ML}`,
    `connect-src 'self' ${ML}`,
    `img-src 'self' data: blob: ${ML}`,
    `worker-src 'self' blob: ${ML}`,
  ].join('; '));
  next();
});

app.use(express.static('.'));

// ─── MercadoPago client ───────────────────────────────────────────────────────
// MP_ACCESS_TOKEN viene de variable de entorno.
// Local:   escríbela en el archivo .env
// Railway: Settings → Variables → agregar MP_ACCESS_TOKEN
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

// ─── PRECIO ───────────────────────────────────────────────────────────────────
// Cuenta colombiana = moneda COP obligatoria, entero sin decimales.
// $5 USD ≈ $21.000 COP — ajusta PRECIO_COP según la TRM del día.
const PRECIO_COP     = 21000;
const PRECIO_DISPLAY = '$5 USD';

// ─── POST /create-preference ──────────────────────────────────────────────────
app.post('/create-preference', async (req, res) => {
  try {
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [{
          id:          'cero-duplicados-csv',
          title:       'CeroDuplicados — Limpieza de dataset CSV',
          description: 'Eliminacion de filas duplicadas · descarga inmediata',
          quantity:    1,
          unit_price:  PRECIO_COP,   // COP, entero
          currency_id: 'COP',        // OBLIGATORIO para cuentas colombianas
        }],
        back_urls: {
          success: `${process.env.APP_URL || 'http://localhost:8080'}/?payment=success`,
          failure: `${process.env.APP_URL || 'http://localhost:8080'}/?payment=failure`,
          pending: `${process.env.APP_URL || 'http://localhost:8080'}/?payment=pending`,
        },
        auto_return:        'approved',
        notification_url:   process.env.MP_WEBHOOK_URL || undefined,
        external_reference: `csv_${Date.now()}`,
        expires:            true,
        expiration_date_to: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
      },
    });

    console.log(`[create-preference] OK → ${result.id} | ${PRECIO_DISPLAY} = $${PRECIO_COP} COP`);
    res.json({
      success:            true,
      preference_id:      result.id,
      init_point:         result.init_point,
      sandbox_init_point: result.sandbox_init_point,
    });
  } catch (err) {
    console.error('[create-preference] Error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── POST /verify-payment ─────────────────────────────────────────────────────
app.post('/verify-payment', async (req, res) => {
  const { payment_id } = req.body;
  if (!payment_id) return res.status(400).json({ success: false, error: 'Falta payment_id' });

  try {
    const payment = new Payment(client);
    const result  = await payment.get({ id: payment_id });

    if (result.status === 'approved') {
      console.log(`[verify-payment] Aprobado: ${payment_id} | $${result.transaction_amount} COP`);
      res.json({ success: true, status: result.status });
    } else {
      console.warn(`[verify-payment] Estado: ${result.status}`);
      res.status(402).json({ success: false, status: result.status });
    }
  } catch (err) {
    console.error('[verify-payment] Error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── POST /webhook ────────────────────────────────────────────────────────────
app.post('/webhook', async (req, res) => {
  const { type, data } = req.body;
  if (type === 'payment' && data?.id) {
    console.log(`[webhook] Notificacion de pago: ${data.id}`);
  }
  res.sendStatus(200);
});

// ─── Servidor ─────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅  CeroDuplicados en http://localhost:${PORT}`);
  console.log(`🔑  MP_ACCESS_TOKEN: ${process.env.MP_ACCESS_TOKEN ? '✓ cargado' : '✗ FALTA'}`);
  console.log(`🌐  APP_URL:         ${process.env.APP_URL || 'http://localhost:8080 (local)'}`);
});