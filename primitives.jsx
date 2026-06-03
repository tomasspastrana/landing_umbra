/* global React */

// ============ Icons (lucide-style inline SVGs) ============
const Icon = ({ d, size = 16, stroke = 2, className = "", children }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    {children || <path d={d} />}
  </svg>
);

const ChevronRight = (p) => <Icon {...p} d="M9 18l6-6-6-6" />;
const Menu = (p) => <Icon {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></Icon>;
const Search = (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></Icon>;
const Sparkles = (p) => <Icon {...p}><path d="M12 3l1.8 4.6L18 9.5l-4.2 1.9L12 16l-1.8-4.6L6 9.5l4.2-1.9z"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z"/></Icon>;
const Inbox = (p) => <Icon {...p}><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></Icon>;
const Star = (p) => <Icon {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const Send = (p) => <Icon {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></Icon>;
const FileEdit = (p) => <Icon {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></Icon>;
const Archive = (p) => <Icon {...p}><rect x="2" y="3" width="20" height="5"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><line x1="10" y1="12" x2="14" y2="12"/></Icon>;
const Trash2 = (p) => <Icon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></Icon>;
const Reply = (p) => <Icon {...p}><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></Icon>;
const Forward = (p) => <Icon {...p}><polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></Icon>;
const MoreHorizontal = (p) => <Icon {...p}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></Icon>;
const Paperclip = (p) => <Icon {...p}><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></Icon>;
const Check = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;

// ============ Apple Logo ============
const AppleLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

// ============ Logo Mark ============
const LogoMark = ({ className = "w-8 h-8" }) => (
  <img src="assets/umbra-logo.png" alt="UMBRA" className={className + " rounded-full object-contain"} />
);

// ============ Apple Button ============
const AppleButton = ({ label = "Agenda una demo", full = false }) => (
  <button
    className={
      "group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] " +
      (full ? "w-full" : "")
    }
  >
    <span>{label}</span>
    <ChevronRight size={16} className="transition-transform group-hover:translate-x-[1px]" />
  </button>
);

// ============ Section Eyebrow ============
const SectionEyebrow = ({ label, tag }) => (
  <div className="inline-flex items-center gap-3 text-xs text-white/70">
    <span className="w-1.5 h-1.5 rounded-full bg-white" />
    <span className="font-medium tracking-wide">{label}</span>
    {tag && (
      <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50">
        {tag}
      </span>
    )}
  </div>
);

Object.assign(window, {
  AppleLogo, LogoMark, AppleButton, SectionEyebrow,
  ChevronRight, Menu, Search, Sparkles, Inbox, Star, Send, FileEdit, Archive,
  Trash2, Reply, Forward, MoreHorizontal, Paperclip, Check,
});
