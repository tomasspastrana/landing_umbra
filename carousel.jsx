/* global React */

// ============ Glowing illustrations (one per card) ============
const ArtMessaging = ({ c1 = '#00d2ff', c2 = '#0B2551' }) => (
  <svg className="cf-icon" width="150" height="150" viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="cf-msg-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor={c1} />
      </linearGradient>
      <filter id="cf-msg-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <g filter="url(#cf-msg-glow)">
      <rect x="18" y="26" width="62" height="44" rx="14" fill="none" stroke="url(#cf-msg-g)" strokeWidth="3" />
      <path d="M34 70 L34 82 L50 70 Z" fill="url(#cf-msg-g)" />
      <rect x="50" y="50" width="52" height="38" rx="12" fill="none" stroke={c1} strokeWidth="3" opacity="0.85" />
      <path d="M86 88 L86 98 L72 88 Z" fill={c1} opacity="0.85" />
      <circle cx="33" cy="48" r="3.2" fill="#fff" />
      <circle cx="45" cy="48" r="3.2" fill="#fff" />
      <circle cx="57" cy="48" r="3.2" fill="#fff" />
    </g>
  </svg>
);

const ArtSecurity = ({ c1 = '#A4F4FD' }) => (
  <svg className="cf-icon" width="150" height="150" viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="cf-sec-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor={c1} />
      </linearGradient>
      <filter id="cf-sec-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <g filter="url(#cf-sec-glow)">
      <path d="M60 20 L92 34 V58 C92 80 78 92 60 100 C42 92 28 80 28 58 V34 Z"
        fill="none" stroke="url(#cf-sec-g)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M48 60 L57 70 L74 48" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const ArtSpeed = ({ c1 = '#22d3ee' }) => (
  <svg className="cf-icon" width="150" height="150" viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="cf-spd-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor={c1} />
      </linearGradient>
      <filter id="cf-spd-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <g filter="url(#cf-spd-glow)">
      <path d="M64 18 L36 64 H58 L52 102 L86 50 H62 Z"
        fill="url(#cf-spd-g)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <line x1="14" y1="42" x2="30" y2="42" stroke={c1} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="10" y1="58" x2="28" y2="58" stroke={c1} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <line x1="16" y1="74" x2="32" y2="74" stroke={c1} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
    </g>
  </svg>
);

const ArtAI = ({ c1 = '#00d2ff' }) => (
  <svg className="cf-icon" width="150" height="150" viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="cf-ai-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor={c1} />
      </linearGradient>
      <filter id="cf-ai-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <g filter="url(#cf-ai-glow)">
      <rect x="36" y="40" width="48" height="44" rx="12" fill="none" stroke="url(#cf-ai-g)" strokeWidth="3.2" />
      <circle cx="50" cy="60" r="4.5" fill="#fff" />
      <circle cx="70" cy="60" r="4.5" fill="#fff" />
      <path d="M52 73 Q60 78 68 73" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <line x1="60" y1="28" x2="60" y2="40" stroke={c1} strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="25" r="4" fill="#fff" />
      <line x1="36" y1="54" x2="26" y2="54" stroke={c1} strokeWidth="3" strokeLinecap="round" />
      <line x1="84" y1="54" x2="94" y2="54" stroke={c1} strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="70" x2="26" y2="70" stroke={c1} strokeWidth="3" strokeLinecap="round" />
      <line x1="84" y1="70" x2="94" y2="70" stroke={c1} strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// ============ Card data ============
const cfCards = [
  {
    key: 'msg',
    title: 'Mensajería en tiempo real',
    desc: 'Conversaciones instantáneas con tus clientes en cualquier canal, sincronizadas al instante.',
    art: ArtMessaging,
    g1: '#00d2ff', g2: '#0B2551',
  },
  {
    key: 'sec',
    title: 'Seguridad de extremo a extremo',
    desc: 'Cada mensaje viaja cifrado y protegido con autenticación de doble factor.',
    art: ArtSecurity,
    g1: '#6f8cff', g2: '#1a2b66',
  },
  {
    key: 'speed',
    title: 'Rapidez sin demoras',
    desc: 'Respuestas en milisegundos. Tus mensajes llegan sin filas ni esperas.',
    art: ArtSpeed,
    g1: '#22d3ee', g2: '#0e3a4d',
  },
  {
    key: 'ai',
    title: 'IA conversacional',
    desc: 'Bots entrenados con IA que entienden la intención y resuelven al instante.',
    art: ArtAI,
    g1: '#A4F4FD', g2: '#143a5a',
  },
];

// ============ Carousel ============
const Carousel = () => {
  const n = cfCards.length;
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 4200);
    return () => clearInterval(t);
  }, [paused, n]);

  // relative position wrapped to [-half, half]
  const rel = (i) => {
    let r = i - active;
    if (r > n / 2) r -= n;
    if (r < -n / 2) r += n;
    return r;
  };

  const slot = (r) => {
    const abs = Math.abs(r);
    if (abs > 1) {
      // hide behind center
      return {
        transform: `translate(-50%, -50%) translateX(${r > 0 ? 1 : -1}px) scale(0.55)`,
        opacity: 0, zIndex: 0, pointerEvents: 'none',
      };
    }
    if (r === 0) {
      return { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, zIndex: 30 };
    }
    const dir = r > 0 ? 1 : -1;
    return {
      transform: `translate(-50%, -50%) translateX(calc(${dir} * clamp(170px, 22vw, 290px))) scale(0.82) rotateY(${-dir * 18}deg)`,
      opacity: 0.92, zIndex: 20,
    };
  };

  return (
    <section id="servicios" className="cf-section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="cf-rays" />
      <div className="cf-planet" />

      <div className="cf-head">
        <h2 className="cf-title">Una conversación, sin fricción</h2>
        <p className="cf-sub">
          UMBRA combina mensajería instantánea, seguridad de nivel empresarial e inteligencia artificial para que cada interacción con tus clientes fluya sin esfuerzo.
        </p>
      </div>

      <div className="cf-stage">
        <div className="cf-track">
          {cfCards.map((card, i) => {
            const r = rel(i);
            const Art = card.art;
            const isCenter = r === 0;
            return (
              <div
                key={card.key}
                className={"cf-card " + (isCenter ? "cf-card-glass" : "")}
                data-pos={isCenter ? "center" : "side"}
                style={slot(r)}
                onClick={() => setActive(i)}
              >
                <div className="cf-art">
                  <div
                    className="cf-art-bg"
                    style={{
                      background: `radial-gradient(120% 110% at 50% 0%, ${card.g1}66 0%, ${card.g2}cc 45%, rgba(8,10,14,0) 80%)`,
                    }}
                  />
                  <div className="cf-art-rays" />
                  <Art c1={card.g1} c2={card.g2} />
                  <div className="cf-platform" />
                </div>
                <div className="cf-body">
                  <div className="cf-card-title">{card.title}</div>
                  <div className="cf-card-desc">{card.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cf-controls">
        <button className="cf-arrow" aria-label="Anterior" onClick={() => setActive((a) => (a - 1 + n) % n)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="cf-dots">
          {cfCards.map((c, i) => (
            <button
              key={c.key}
              className={"cf-dot " + (i === active ? "active" : "")}
              aria-label={"Ir a " + c.title}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button className="cf-arrow" aria-label="Siguiente" onClick={() => setActive((a) => (a + 1) % n)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </section>
  );
};

window.Carousel = Carousel;
