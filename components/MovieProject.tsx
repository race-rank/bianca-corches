function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FilmIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold/60"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="17" y1="7" x2="22" y2="7" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="2" y1="17" x2="7" y2="17" />
    </svg>
  )
}

export default function MovieProject() {
  return (
    <section className="py-28 bg-cinema relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, #D4A870 40px, #D4A870 41px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-5">
              ✦ &nbsp; moment de mândrie
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              That March
              <br />
              <span className="italic" style={{ color: '#D4A870' }}>
                Film
              </span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-5">
              Am contribuit la{' '}
              <strong style={{ color: '#D4A870' }}>
                prezența pe social media
              </strong>{' '}
              a filmului <em>That March</em> - construind o audiență angajată
              și creând conținut care a amplificat vizibilitatea producției
              cinematografice.
            </p>
            <p className="text-cream/60 text-lg leading-relaxed mb-10">
              O experiență care mi-a confirmat că adaptabilitatea mea
              funcționează și în industria cinematografică, nu doar în fashion
              sau lifestyle.
            </p>
            <a
              href="https://www.instagram.com/thatmarchfilm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold btn-outline-gold"
            >
              <InstagramIcon />
              @thatmarchfilm
            </a>
          </div>

          {/* Right: film card */}
          <div className="relative flex justify-center">
            <div
              className="w-full max-w-sm rounded-3xl p-10 text-center border relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #2A1810/40, #1A1008)',
                borderColor: 'rgba(212, 168, 112, 0.2)',
                backgroundColor: 'rgba(42, 24, 16, 0.6)',
              }}
            >
              <div className="flex justify-center mb-6 opacity-50">
                <FilmIcon />
              </div>

              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: 'rgba(212,168,112,0.6)' }}
              >
                Producție Cinematografică
              </p>

              <h3
                className="font-display text-4xl font-bold mb-2"
                style={{ color: '#EDD5A0' }}
              >
                That March
              </h3>

              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: 'rgba(212,168,112,0.15)' }}
              >
                <p className="text-cream/40 text-xs uppercase tracking-widest mb-1">
                  Social Media Presence
                </p>
                <p className="text-cream/80 font-semibold">Bianca Corcheș</p>
              </div>
            </div>

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 opacity-20"
              style={{ background: 'radial-gradient(circle, #D4A870, transparent)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
