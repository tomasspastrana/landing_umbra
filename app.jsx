/* global React, ReactDOM */

const App = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
    {/* Fullscreen background video */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
      />
      {/* Subtle vignette so foreground text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, transparent 0%, rgba(12,12,12,0.55) 70%, rgba(12,12,12,0.9) 100%)',
        }}
      />
    </div>

    {/* Root SVG noise filter (subtle grain, multiply blend) used by shiny headline */}
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="c3-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
        <feComposite in2="SourceGraphic" operator="in" result="noise" />
        <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
      </filter>
    </svg>

    <window.Navbar />
    <window.Hero />
    <window.Services />
    <window.Carousel />
    <window.LogoCloud />
    <window.Testimonials />
    <window.Process />
    <window.FAQ />
    <window.Contact />
    <window.Footer />
    <window.FloatingWhatsApp />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
