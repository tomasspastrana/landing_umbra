/* global React, motion */
const { motion: m1 } = window;
// Pull motion from the global Motion namespace
const mo = (window.Motion && window.Motion.motion) || null;

// Fallback wrapper: if motion isn't available, render a plain element and strip motion-only props.
const MOTION_PROPS = new Set([
  'initial', 'animate', 'exit', 'transition', 'variants', 'whileHover', 'whileTap',
  'whileInView', 'whileFocus', 'whileDrag', 'viewport', 'layout', 'layoutId',
  'drag', 'dragConstraints', 'onAnimationStart', 'onAnimationComplete'
]);
const stripMotion = (props) => {
  const out = {};
  for (const k in props) if (!MOTION_PROPS.has(k)) out[k] = props[k];
  return out;
};
const M = new Proxy({}, {
  get: (_t, tag) => {
    if (mo && mo[tag]) return mo[tag];
    return (props) => React.createElement(tag, stripMotion(props), props.children);
  }
});
window.M = M;

const easeOut = [0.22, 1, 0.36, 1];

// ============ Navbar ============
const Navbar = () => {
  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos', href: '#casos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <M.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 flex items-center justify-between relative z-20"
    >
      <div className="flex items-center">
        <window.LogoMark className="w-8 h-8" />
      </div>
      <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
        {links.map((l, i) => (
          <M.a
            key={l.label}
            href={l.href}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            className="text-white/70 text-sm font-medium hover:text-white transition-colors"
          >
            {l.label}
          </M.a>
        ))}
      </div>
      <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
        <window.Menu size={16} />
      </button>
    </M.nav>
  );
};

// ============ Hero ============
const gradientStyle = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
};

const Hero = () => (
  <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <M.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
      className="font-semibold tracking-tight leading-[0.9] mx-auto"
      style={{ fontSize: 'clamp(2.25rem, 6vw, 5.5rem)', maxWidth: 'min(100%, 18ch)' }}
    >
      <span className="block text-white">UMBRA</span>
      <span className="block animate-shiny" style={gradientStyle}>Que tu idea vea la luz</span>
    </M.h1>
    <M.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
      className="mt-8 mx-auto text-white/60 max-w-md text-base leading-[1.5]"
    >
      Desarrollamos software a medida y automatizamos tus conversaciones con bots impulsados por inteligencia artificial.
    </M.p>
    <M.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
      className="mt-8 flex flex-col items-center gap-3"
    >
      <a href="#contacto">
        <window.AppleButton />
      </a>
      <span className="text-xs text-white/40">Agenda una consultoría gratuita</span>
    </M.div>
  </section>
);

// ============ macOS menu bar strip ============
const MenuBar = () => {
  const items = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];
  return (
    <M.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <window.AppleLogo className="w-3.5 h-3.5" />
          <span className="font-bold text-white">Aura</span>
          {items.map((it, i) => (
            <span
              key={it}
              className={
                "text-white/70 " +
                (i > 3 ? "hidden md:inline " : i > 2 ? "hidden sm:inline " : "")
              }
            >
              {it}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <window.Search size={14} />
          <span>Wed May 6  1:09 PM</span>
        </div>
      </div>
    </M.div>
  );
};

// ============ Inbox mockup ============
const messages = [
  { from: 'Lattice', subject: 'Weekly product digest', preview: 'Your team shipped 23 issues this week...', time: '9:41 AM', unread: true, active: true },
  { from: 'Sophia Chen', subject: 'Re: Q3 roadmap review', preview: 'Thanks for sending the deck over. I had a few thoughts...', time: '8:12 AM', unread: true },
  { from: 'Frame', subject: 'Marcus commented on your file', preview: 'Love the new direction on the landing hero.', time: 'Yesterday' },
  { from: 'Strand', subject: 'Payout of $12,480.00 sent', preview: 'Your payout is on its way to your bank...', time: 'Yesterday' },
  { from: 'Vellum', subject: 'Deployment ready for aura-web', preview: 'Preview is live at aura-web-g3f.vellum.app', time: 'Mon' },
  { from: 'Helix', subject: '[aura/core] PR #482 approved', preview: 'david-lim approved your pull request.', time: 'Mon' },
];

const navRows = [
  { icon: 'Inbox', label: 'Inbox', count: 12, active: true },
  { icon: 'Star', label: 'Starred', count: 3 },
  { icon: 'Send', label: 'Sent' },
  { icon: 'FileEdit', label: 'Drafts', count: 2 },
  { icon: 'Archive', label: 'Archive' },
  { icon: 'Trash2', label: 'Trash' },
];

const labels = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
];

const InboxMock = () => (
  <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
    <M.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.1, ease: easeOut }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
    >
      {/* Title bar */}
      <div className="h-10 px-4 flex items-center border-b border-white/10 bg-black/40">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50">Aura — Inbox</div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 h-[520px]">
        {/* Sidebar */}
        <div className="col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col gap-4 overflow-y-auto">
          <button className="rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 inline-flex items-center justify-center gap-2">
            <window.Sparkles size={14} />
            Compose with Aura
          </button>
          <div className="flex flex-col gap-1">
            {navRows.map((r) => {
              const I = window[r.icon];
              return (
                <button
                  key={r.label}
                  className={
                    "flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs transition-colors " +
                    (r.active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5")
                  }
                >
                  <span className="inline-flex items-center gap-2.5">
                    <I size={14} />
                    {r.label}
                  </span>
                  {r.count != null && <span className="text-[10px] text-white/50">{r.count}</span>}
                </button>
              );
            })}
          </div>
          <div className="mt-2">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2 px-2">Labels</div>
            <div className="flex flex-col gap-1">
              {labels.map((l) => (
                <div key={l.name} className="flex items-center gap-2.5 px-2.5 py-1 text-xs text-white/60">
                  <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  {l.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message list */}
        <div className="col-span-4 border-r border-white/10 flex flex-col">
          <div className="h-10 px-3 border-b border-white/10 flex items-center gap-2 text-xs text-white/40">
            <window.Search size={13} />
            <input
              placeholder="Search mail"
              className="bg-transparent outline-none placeholder:text-white/40 text-white text-xs flex-1"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  "px-4 py-3 border-b border-white/5 cursor-pointer transition-colors " +
                  (m.active ? "bg-white/[0.04]" : "hover:bg-white/[0.02]")
                }
              >
                <div className="flex items-center justify-between">
                  <span className={"text-xs " + (m.unread ? "text-white font-semibold" : "text-white/70 font-medium")}>
                    {m.unread && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00d2ff] mr-2 align-middle" />}
                    {m.from}
                  </span>
                  <span className="text-[10px] text-white/40">{m.time}</span>
                </div>
                <div className="text-xs text-white/80 mt-1 truncate">{m.subject}</div>
                <div className="text-[11px] text-white/40 mt-0.5 truncate">{m.preview}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reader */}
        <div className="col-span-5 flex flex-col">
          <div className="h-10 px-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[window.Reply, window.Forward, window.Archive, window.Trash2].map((I, i) => (
                <button key={i} className="w-7 h-7 rounded-md hover:bg-white/5 inline-flex items-center justify-center text-white/70">
                  <I size={14} />
                </button>
              ))}
            </div>
            <button className="w-7 h-7 rounded-md hover:bg-white/5 inline-flex items-center justify-center text-white/70">
              <window.MoreHorizontal size={14} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <div className="text-base font-semibold text-white">Weekly product digest</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold text-white" style={{ background: 'linear-gradient(to bottom right, #00d2ff, #0B2551)' }}>
                L
              </div>
              <div className="text-xs">
                <span className="text-white font-medium">Lattice</span>
                <span className="text-white/50"> &nbsp;to me · 9:41 AM</span>
              </div>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/70">Work</span>
            </div>

            <div className="liquid-glass rounded-xl p-3 mt-5">
              <div className="flex items-center gap-2 text-xs font-medium">
                <window.Sparkles size={14} className="text-[#A4F4FD]" />
                <span className="text-white">Summary by Aura</span>
              </div>
              <div className="text-xs text-white/70 mt-2 leading-[1.55]">
                Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.
              </div>
            </div>

            <div className="mt-5 space-y-3 text-xs leading-[1.65] text-white/80">
              <p>Hi team,</p>
              <p>Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.</p>
              <p>Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.</p>
              <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
              <p className="text-white/50">— The Lattice team</p>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-xs text-white/80">
              <window.Paperclip size={13} />
              digest-may-6.pdf
            </div>
          </div>
        </div>
      </div>
    </M.div>
  </section>
);

Object.assign(window, { Navbar, Hero, MenuBar, InboxMock });
