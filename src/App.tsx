import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('features');
  
  const features = [
    {
      icon: '🔄',
      title: 'Eliminación de Duplicados',
      description: 'Detecta y elimina registros duplicados automáticamente usando algoritmos inteligentes de coincidencia.'
    },
    {
      icon: '🔍',
      title: 'Detección de Valores Nulos',
      description: 'Identifica valores faltantes, nulos o inválidos y sugiere las mejores estrategias de relleno.'
    },
    {
      icon: '✏️',
      title: 'Normalización de Texto',
      description: 'Estandariza formatos de texto, mayúsculas, acentos y caracteres especiales.'
    },
    {
      icon: '📊',
      title: 'Validación de Datos',
      description: 'Verifica formatos de email, teléfono, fechas y otros patrones predefinidos.'
    },
    {
      icon: '🧹',
      title: 'Limpieza de Espacios',
      description: 'Elimina espacios en blanco多余, tabs y caracteres invisibles no deseados.'
    },
    {
      icon: '🔗',
      title: 'Enriquecimiento de Datos',
      description: 'Complementa tu información con datos externos verificados y actualizados.'
    }
  ];

  const steps = [
    { number: '01', title: 'Sube tu archivo', description: 'Importa CSV, Excel o JSON desde tu ordenador o cloud' },
    { number: '02', title: 'Selecciona reglas', description: 'Elige las operaciones de limpieza que necesitas aplicar' },
    { number: '03', title: 'Procesa y descarga', description: 'Ejecuta la limpieza y descarga tus datos optimizados' }
  ];

  const plans = [
    {
      name: 'Básico',
      price: '29',
      period: '/mes',
      features: ['Hasta 1,000 registros', 'Eliminación de duplicados', 'Detección de nulos', 'Soporte por email'],
      cta: 'Comenzar Gratis',
      popular: false
    },
    {
      name: 'Profesional',
      price: '79',
      period: '/mes',
      features: ['Hasta 50,000 registros', 'Todas las funciones básicas', 'Normalización avanzada', 'Enriquecimiento de datos', 'Soporte prioritario'],
      cta: 'Comenzar Prueba',
      popular: true
    },
    {
      name: 'Empresarial',
      price: '199',
      period: '/mes',
      features: ['Registros ilimitados', 'API completa', 'Integraciones personalizadas', 'Gestor de cuenta dedicado', 'SLA garantizado'],
      cta: 'Contactar Ventas',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-xl">💠</span>
            </div>
            <span className="text-xl font-bold">Dataclean Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">Características</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-cyan-400 transition-colors">Cómo funciona</a>
            <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">Precios</a>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-2 rounded-full font-medium transition-all">
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url('https://public.youware.com/users-website-assets/prod/49c187f0-a975-484c-9615-937fbea89a75/1fbbce9345dd4d6daed7a580227b04b8.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">✨ Transforma tus datos en minutos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Limpia tus datos
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              sin complicaciones
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto">
            La herramienta más inteligente para eliminar duplicados, normalizar formatos y enriquecer tus datasets. 
            Automatiza el 80% del trabajo manual.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Prueba Gratis
            </button>
            <button className="w-full sm:w-auto border border-slate-600 hover:border-cyan-400 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
              <span>▶</span> Ver Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">500K+</div>
              <div className="text-slate-500 text-sm">Registros limpiados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">10K+</div>
              <div className="text-slate-500 text-sm">Usuarios activos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">99.9%</div>
              <div className="text-slate-500 text-sm">Precisión</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Todo lo que necesitas para
              <span className="text-cyan-400"> datos limpios</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Funciones potentes diseñadas para automatizar cada aspecto de la limpieza de datos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl p-8 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Limpia tus datos en
              <span className="text-cyan-400"> 3 pasos</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Proceso simple e intuitivo, sin necesidad de conocimientos técnicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8 h-full">
                  <div className="text-6xl font-bold text-cyan-400/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planes para cada
              <span className="text-cyan-400"> necesidad</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus requerimientos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500'
                    : 'border border-slate-600 hover:border-cyan-400'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tus datos?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Únete a miles de usuarios que ya están optimizando su flujo de trabajo con Dataclean Pro
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-10 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
            Comenzar Prueba Gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">💠</span>
              </div>
              <span className="font-bold">Dataclean Pro</span>
            </div>
            <div className="flex items-center gap-8 text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Términos</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Contacto</a>
            </div>
            <div className="text-slate-500 text-sm">
              © 2026 Dataclean Pro. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
