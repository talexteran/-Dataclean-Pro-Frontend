# Dataclean Pro - Especificación para Bubble.io

## 📋 Resumen del Proyecto

**Nombre**: Dataclean Pro  
**Tipo**: SaaS de Limpieza de Datos  
**Plataforma**: Bubble.io (No-code)  
**Funcionalidad Principal**: Plataforma para limpiar, normalizar y enriquecer datasets

---

## 🎨 Diseño Visual

### Paleta de Colores
- **Background Principal**: `#0f172a` (Slate 900)
- **Background Secundario**: `#1e293b` (Slate 800)
- **Color de Acento**: `#22d3ee` (Cyan 400)
- **Color Primario**: `#2563eb` (Blue 600)
- **Color Secundario**: `#8b5cf6` (Purple 500)
- **Texto Principal**: `#f8fafc` (White)
- **Texto Secundario**: `#94a3b8` (Slate 400)
- **Bordes**: `#334155` (Slate 700)

### Tipografía
- **Títulos**: System font (SF Pro, Segoe UI, Roboto)
- **Tamaños**:
  - H1: 56px (hero), 40-48px (secciones)
  - H2: 36px
  - H3: 24px
  - Body: 16-18px

---

## 📱 Estructura de Páginas

### 1. Página de Inicio (Landing Page)

#### Header/Navbar
- Logo (izquierda): Icono de diamante + "Dataclean Pro"
- Menú (centro): Características, Cómo funciona, Precios
- Botón (derecha): "Iniciar Sesión" - estilo outline
- Background: Semi-transparente con blur

#### Hero Section
- Badge superior: "✨ Transforma tus datos en minutos"
- Título principal: "Limpia tus datos sin complicaciones"
- Subtítulo: "La herramienta más inteligente para eliminar duplicados, normalizar formatos y enriquecer tus datasets. Automatiza el 80% del trabajo manual."
- Botones:
  - "Prueba Gratis" (CTA principal, gradiente cyan-blue)
  - "Ver Demo" (outline)
- Stats: 500K+ registros, 10K+ usuarios, 99.9% precisión
- Background: Degradado + patrón de grid sutil

#### Features Section (Características)
- Título: "Todo lo necesitas para datos limpios"
- Grid de 6 tarjetas:
  1. 🔄 Eliminación de Duplicados
  2. 🔍 Detección de Valores Nulos
  3. ✏️ Normalización de Texto
  4. 📊 Validación de Datos
  5. 🧹 Limpieza de Espacios
  6. 🔗 Enriquecimiento de Datos

#### How It Works (Cómo Funciona)
- Título: "Limpia tus datos en 3 pasos"
- 3 pasos con números (01, 02, 03):
  1. Sube tu archivo (CSV, Excel, JSON)
  2. Selecciona reglas de limpieza
  3. Procesa y descarga

#### Pricing Section (Precios)
- Título: "Planes para cada necesidad"
- 3 columnas:
  - **Básico** ($29/mes): Hasta 1,000 registros, funciones básicas, soporte email
  - **Profesional** ($79/mes): Hasta 50,000 registros, todas las funciones, enriquecimiento, soporte prioritario (destacado)
  - **Empresarial** ($199/mes): Ilimitados, API, integraciones, gestor dedicado

#### CTA Final
- Título: "¿Listo para transformar tus datos?"
- Subtítulo: "Únete a miles de usuarios..."
- Botón: "Comenzar Prueba Gratis"

#### Footer
- Logo + Copyright
- Enlaces: Términos, Privacidad, Contacto

---

## 🧩 Componentes de Bubble.io a Crear

### Elementos UI Reutilizables

1. **Button Primary**
   - Gradiente cyan → blue
   - Border radius: 9999px (pill)
   - Estados: default, hover (scale 1.05), active

2. **Button Secondary**
   - Border outline
   - Estados: default, hover (border cyan)

3. **Feature Card**
   - Background: slate-800/50
   - Border: slate-700, hover: cyan-500/50
   - Icono + título + descripción
   - Hover: translateY(-4px)

4. **Pricing Card**
   - Similar a feature card
   - Versión "popular" con borde cyan y badge

5. **Step Card**
   - Número grande (opacidad 20%)
   - Título + descripción

---

## 💾 Base de Datos (Data Types)

### User
- email (text)
- password (password)
- name (text)
- created_at (date)
- plan (text): "free", "basic", "professional", "enterprise"
- records_used (number)
- records_limit (number)

### DataFile
- user (User, relation)
- filename (text)
- file_url (file)
- status (text): "processing", "completed", "error"
- created_at (date)
- record_count (number)
- cleaned_file_url (file)

### CleaningRule
- name (text)
- description (text)
- type (text): "deduplicate", "null_detection", "normalization", "validation", "trim", "enrichment"
- is_active (yes/no)

---

## ⚙️ Workflows (Automatizaciones)

### 1. User Registration
- Crear usuario
- Asignar plan gratuito por defecto
- Enviar email de bienvenida

### 2. File Upload & Processing
- Subir archivo (drag & drop)
- Validar formato (CSV, Excel, JSON)
- Crear registro en DataFile
- Ejecutar limpieza (usando plugin o API)
- Guardar archivo limpio
- Actualizar status

### 3. Plan Upgrade
- Seleccionar plan
- Procesar pago (Stripe)
- Actualizar límites del usuario

---

## 🔌 Plugins Recomendados para Bubble.io

1. **Stripe** - Pagos
2. **PDF Converter** - Exportar reportes
3. **AirTable** o **Google Sheets** - Integración
4. **API Connector** - Conexiones externas
5. **Toolbox** - Elementos adicionales
6. **Dropzone** - Subida de archivos mejorada

---

## 🔗 API Externa (Opcional)

Para el procesamiento real de datos, considera integrar con:
- **Python/Node.js backend** (via API Connector)
- **Zapier** para automatizaciones
- **Make (Integromat)** para flujos complejos

---

## 📝 Checklist de Implementación

- [ ] Crear cuenta en Bubble.io
- [ ] Configurar tipos de datos
- [ ] Diseñar página de inicio
- [ ] Crear componentes reutilizables
- [ ] Implementar sistema de autenticación
- [ ] Crear página de dashboard
- [ ] Implementar subida de archivos
- [ ] Conectar procesamiento de datos
- [ ] Configurar sistema de pagos (Stripe)
- [ ] Testing y deployment
