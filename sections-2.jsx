/* global React */
const easeOutT = [0.22, 1, 0.36, 1];
const Mo = window.M;

// ============ Feature Triage ============
const triageBuckets = [
  { label: 'Priority', count: 4, color: '#ffffff', items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'] },
  { label: 'Follow-up', count: 7, color: '#e5e5e5', items: ['Marcus — design review', 'Frame — comment thread'] },
  { label: 'Updates', count: 18, color: '#a3a3a3', items: ['Vellum — deploy ready', 'Helix — PR #482 merged'] },
  { label: 'Archived', count: 13, color: '#525252', items: ['Strand payout · Newsletter · Receipts'] },
];

const FeatureTriage = () => (
  <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      <Mo.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeOutT }}
      >
        <window.SectionEyebrow label="Triage" tag="AI-native" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Clear your inbox<br />in a single pass.
        </h2>
        <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
          Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe'].map((c) => (
            <span key={c} className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              {c}
            </span>
          ))}
        </div>
      </Mo.div>

      <Mo.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeOutT, delay: 0.15 }}
        className="liquid-glass rounded-2xl p-5"
      >
        <div className="text-xs text-white/60 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          Today · 42 messages triaged
        </div>
        <div className="grid grid-cols-1 gap-3">
          {triageBuckets.map((b) => (
            <div key={b.label} className="liquid-glass rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium" style={{ color: b.color }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }} />
                  {b.label}
                </div>
                <span className="text-[11px] text-white/40">{b.count}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {b.items.map((it) => (
                  <li key={it} className="text-[11px] text-white/60 truncate">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Mo.div>
    </div>
  </section>
);

// ============ Logo Cloud ============
const logos = ['Dr. Jorge Trigo', 'Conectando Salta'];

const LogoCloud = () => (
  <section id="casos" className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 md:py-20 border-t border-white/10">
    <div className="text-center text-xs uppercase tracking-widest text-white/40">
      Clientes que ya confían en UMBRA
    </div>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      {logos.map((l, i) => (
        <Mo.div
          key={l}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors cursor-default">
            {l}
          </span>
        </Mo.div>
      ))}
    </div>
  </section>
);

// ============ Testimonials ============
const testimonials = [
  {
    quote: 'UMBRA convirtió nuestra idea en una plataforma funcional en semanas. El proceso fue claro de principio a fin.',
    name: 'Jorge Trigo',
    role: 'Doctor ',
    company: 'Odontología Particular',
  },
  {
    quote: 'El bot de IA que desarrollaron responde casi el 100% de las consultas de nuestros clientes sin intervención humana.',
    name: 'Gustavo Callejón',
    role: 'CEO',
    company: 'Conectando Salta',
  },
];

const Testimonials = () => (
  <section className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 border-t border-white/10">
    <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-6">
      {testimonials.map((t, i) => (
        <Mo.figure
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: easeOutT }}
          className="liquid-glass rounded-2xl p-6 w-full md:w-[380px] cursor-default transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
        >
          <blockquote className="text-sm text-white/80 leading-[1.6]">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 pt-5 border-t border-white/10">
            <div className="text-sm font-semibold text-white">{t.name}</div>
            <div className="text-xs text-white/50">{t.role}</div>
            <div className="text-xs text-white font-semibold tracking-wide mt-1">{t.company}</div>
          </figcaption>
        </Mo.figure>
      ))}
    </div>
  </section>
);

// ============ Services ============
const IconCode = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconChat = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
    <circle cx="9" cy="11.5" r="1" fill="currentColor" stroke="none" /><circle cx="12.5" cy="11.5" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="11.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconBolt = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const services = [
  {
    icon: IconCode,
    title: 'Software a medida',
    desc: 'Webs, apps y plataformas desarrolladas desde cero, a la medida exacta de tu negocio.',
  },
  {
    icon: IconChat,
    title: 'Bots con IA',
    desc: 'Chatbots que atienden, responden y venden 24/7 en WhatsApp, web y redes sociales.',
  },
  {
    icon: IconBolt,
    title: 'Automatización',
    desc: 'Conectamos tus herramientas y eliminamos las tareas repetitivas que te quitan tiempo.',
  },
];

const Services = () => (
  <section id="servicios" className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 border-t border-white/10">
    <div className="text-center max-w-2xl mx-auto">
      <div className="flex justify-center">
        <window.SectionEyebrow label="Servicios" tag="Lo que hacemos" />
      </div>
      <h2 className="mt-5 font-semibold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
        Todo lo que tu idea necesita para crecer
      </h2>
      <p className="mt-5 text-white/60 text-base leading-[1.6]">
        Combinamos desarrollo a medida e inteligencia artificial para llevar tu proyecto del concepto a la realidad.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {services.map((s, i) => {
        const Ico = s.icon;
        return (
          <Mo.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutT }}
            className="liquid-glass rounded-2xl p-7 cursor-default transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
              style={{ background: 'linear-gradient(135deg, rgba(0,210,255,0.25), rgba(11,37,81,0.45))', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Ico />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{s.title}</h3>
            <p className="mt-3 text-sm text-white/55 leading-[1.6]">{s.desc}</p>
          </Mo.div>
        );
      })}
    </div>
  </section>
);

// ============ Process ============
const steps = [
  { n: '01', title: 'Consultoría gratuita', desc: 'Conversamos para entender tu idea, tus objetivos y qué necesitas resolver.' },
  { n: '02', title: 'Propuesta y plan', desc: 'Te presentamos alcance, tiempos y presupuesto claros, sin letra chica.' },
  { n: '03', title: 'Desarrollo', desc: 'Construimos tu solución con entregas y feedback continuo en cada etapa.' },
  { n: '04', title: 'Entrega y soporte', desc: 'Lanzamos tu proyecto y te acompañamos para que siga creciendo.' },
];

const Process = () => (
  <section id="proceso" className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 border-t border-white/10">
    <div className="text-center max-w-2xl mx-auto">
      <div className="flex justify-center">
        <window.SectionEyebrow label="Proceso" tag="Cómo trabajamos" />
      </div>
      <h2 className="mt-5 font-semibold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
        De la idea al lanzamiento en 4 pasos
      </h2>
    </div>

    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {steps.map((s, i) => (
        <Mo.div
          key={s.n}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutT }}
          className="liquid-glass rounded-2xl p-6"
        >
          <div
            className="text-4xl font-bold tracking-tight"
            style={{ background: 'linear-gradient(135deg, #A4F4FD, #00d2ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}
          >
            {s.n}
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{s.title}</h3>
          <p className="mt-2 text-sm text-white/55 leading-[1.55]">{s.desc}</p>
        </Mo.div>
      ))}
    </div>
  </section>
);

// ============ Contact ============
// TODO: reemplazar por los datos reales de UMBRA
const CONTACT_EMAIL = 'contacto@umbra-lat.com';
const WHATSAPP_NUMBER = '5493875790908'; // formato internacional sin "+", ej: 5493875551234
// Pega aquí tu Access Key de https://web3forms.com (gratis). El correo llega solo, sin backend.
const WEB3FORMS_KEY = '4a9aa663-bc20-4078-b023-96366be6f2d5';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo contacto desde la web — ${name || 'sin nombre'}`,
          from_name: name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const waText = encodeURIComponent('¡Hola UMBRA! Tengo una idea/proyecto y me gustaría más información.');
  const inputCls =
    'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#00d2ff]/70 focus:bg-white/[0.05]';

  return (
    <section id="contacto" className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center">
          <window.SectionEyebrow label="Contacto" tag="Hablemos" />
        </div>
        <h2 className="mt-5 font-semibold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}>
          <span className="block">¿Tienes una idea?</span>
          <span className="block">Hagámosla realidad.</span>
        </h2>
        <p className="mt-6 text-white/60 text-base leading-[1.6]">
          Desarrollamos el software y los bots de IA que tu negocio necesita para crecer. Déjanos tus datos o escríbenos por WhatsApp y demos el primer paso juntos.
        </p>
      </div>

      <Mo.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: easeOutT }}
        className="liquid-glass rounded-3xl p-7 sm:p-9 mt-12 max-w-xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre" className={inputCls}
            />
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email" className={inputCls}
            />
          </div>
          <textarea
            required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntanos qué tienes en mente…" className={inputCls + ' resize-none'}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            {status !== 'sending' && (
              <window.ChevronRight size={16} className="transition-transform group-hover:translate-x-[1px]" />
            )}
          </button>

          {status === 'success' && (
            <p className="text-sm text-center text-[#A4F4FD]">¡Mensaje enviado! Te responderemos pronto.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-center text-red-400">Hubo un problema al enviar. Probá de nuevo o escríbenos por WhatsApp.</p>
          )}
        </form>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white font-medium px-5 py-3 hover:bg-white/5 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            WhatsApp
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-white transition-colors">
            {CONTACT_EMAIL}
          </a>
        </div>
      </Mo.div>
    </section>
  );
};

// ============ Floating WhatsApp ============
const FloatingWhatsApp = () => {
  const waText = encodeURIComponent('¡Hola UMBRA! Tengo una idea/proyecto y me gustaría más información.');
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 active:scale-95"
      style={{ background: '#25D366' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  );
};

// ============ FAQ ============
const faqs = [
  {
    q: '¿Cuánto tarda en estar listo mi proyecto?',
    a: 'Depende del alcance. Un MVP o landing puede estar en 2–3 semanas; un desarrollo completo con bots e integraciones, entre 4 y 8 semanas. En la consultoría inicial te damos un tiempo estimado concreto.',
  },
  {
    q: '¿Trabajan con clientes fuera de Salta o del país?',
    a: 'Sí. Trabajamos 100% en remoto, así que podemos desarrollar tu proyecto estés donde estés. La comunicación es por videollamada, WhatsApp y email.',
  },
  {
    q: '¿Qué incluye la consultoría gratuita?',
    a: 'Una reunión para entender tu idea, tus objetivos y qué necesitas resolver. Salís con una propuesta clara de qué se puede hacer, cómo y en cuánto tiempo, sin compromiso.',
  },
  {
    q: '¿Dan soporte después de la entrega?',
    a: 'Sí. Todos los proyectos incluyen un período de soporte, y ofrecemos planes de mantenimiento continuo para que tu solución siga funcionando y creciendo.',
  },
  {
    q: '¿Cómo manejan el presupuesto?',
    a: 'Te pasamos un presupuesto cerrado y por escrito antes de empezar, con el alcance bien definido. Sin sorpresas ni costos ocultos.',
  },
];

const FAQ = () => {
  const [open, setOpen] = React.useState(-1);
  return (
    <section id="faq" className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center">
          <window.SectionEyebrow label="FAQ" tag="Preguntas frecuentes" />
        </div>
        <h2 className="mt-5 font-semibold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
          ¿Tienes dudas? Las resolvemos
        </h2>
      </div>

      <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="liquid-glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              >
                <span className="text-base font-medium text-white">{f.q}</span>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={'shrink-0 text-white/60 transition-transform duration-300 ' + (isOpen ? 'rotate-180' : '')}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={'px-6 overflow-hidden transition-all duration-300 ease-out ' + (isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0')}>
                <p className="text-sm text-white/55 leading-[1.6]">{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ============ Pricing ============
const plans = [
  {
    tier: 'Starter',
    priceM: 'Desde $499',
    priceY: 'Desde $499',
    desc: 'Para validar tu idea con un MVP funcional y un chatbot básico.',
    features: [
      'Landing page o app de una sección',
      'Chatbot con IA para 1 canal',
      'Hasta 3 flujos automatizados',
      'Diseño responsive a medida',
      'Soporte por 30 días',
    ],
  },
  {
    tier: 'Business',
    priceM: 'Desde $1.499',
    priceY: 'Desde $1.499',
    desc: 'Para empresas que necesitan software a medida y automatización seria.',
    features: [
      'Desarrollo web o app completa',
      'Bot de IA multicanal (WhatsApp, web, redes)',
      'Integraciones con tus herramientas',
      'Panel de métricas y conversaciones',
      'Soporte y mantenimiento continuo',
    ],
  },
  {
    tier: 'Enterprise',
    pro: true,
    priceM: 'A medida',
    priceY: 'A medida',
    desc: 'Para proyectos a gran escala con requerimientos específicos.',
    features: [
      'Arquitectura y desarrollo dedicado',
      'Agentes de IA entrenados con tus datos',
      'Automatización de procesos internos',
      'Equipo y SLA dedicados',
      'Consultoría tecnológica estratégica',
    ],
  },
];

const Pricing = () => {
  const [yearly, setYearly] = React.useState(false);
  return (
    <section className="c3-pricing-section relative z-10">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">UMBRA</span>
          <span className="c3-watermark-line-2">Que tu idea vea la luz</span>
        </div>
      </div>

      <div className="c3-grid">
        {plans.map((p) => (
          <div key={p.tier} className={"c3-card " + (p.pro ? "c3-card-pro" : "")}>
            <div className="c3-tier-small">{p.tier}</div>
            <div className="c3-tier-large">{yearly ? p.priceY : p.priceM}</div>
            <div className="c3-desc">{p.desc}</div>
            <ul className="c3-list">
              {p.features.map((f) => (
                <li key={f}>
                  <span className="c3-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="c3-btn">Solicitar cotización</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============ Final CTA ============
const FinalCTA = () => (
  <section id="contacto" className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
    <Mo.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: easeOutT }}
      className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
          opacity: 0.3,
        }}
      />
      <h2 className="relative font-semibold tracking-tight leading-[1.02]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}>
        <span className="block">¿Tienes una idea?</span>
        <span className="block">Hagámosla realidad.</span>
      </h2>
      <p className="relative mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
        Desarrollamos el software y los bots de IA que tu negocio necesita para crecer. Cuéntanos tu proyecto y demos el primer paso juntos.
      </p>
      <div className="relative mt-8 flex items-center justify-center">
        <a href="#contacto">
          <window.AppleButton label="Agenda una demo" />
        </a>
      </div>
    </Mo.div>
  </section>
);

// ============ Footer ============
const Footer = () => (
  <footer className="relative z-10 border-t border-white/10">
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <window.LogoMark className="w-5 h-5" />
        <span className="text-xs text-white/50">© 2026 UMBRA. Todos los derechos reservados.</span>
      </div>
      <div className="flex items-center gap-6 text-xs text-white/50">
        <a href="#" className="hover:text-white">Privacidad</a>
        <a href="#" className="hover:text-white">Términos</a>
        <a href="#" className="hover:text-white">Contacto</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { FeatureTriage, LogoCloud, Testimonials, Services, Process, FAQ, Contact, FloatingWhatsApp, Pricing, FinalCTA, Footer });
