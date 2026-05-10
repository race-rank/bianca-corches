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

function MailIcon() {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5E6D3 0%, #EDD5C0 100%)',
      }}
    >
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-terracotta-light/20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/15 translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase mb-6">
          ✦ &nbsp; să lucrăm împreună
        </p>

        <h2 className="font-display text-5xl md:text-7xl font-bold text-brown-dark mb-6 leading-tight">
          Hai să creăm
          <br />
          <span className="italic text-gradient">ceva împreună</span>
        </h2>

        <p className="text-brown-mid text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Dacă ești un brand care caută o creatoare de conținut adaptabilă,
          creativă și dedicată - hai să vorbim!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="https://www.instagram.com/bianca.corches/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-terracotta text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta-dark transition-all duration-200 hover:scale-105 shadow-lg shadow-terracotta/25"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href="mailto:biancacorches8@gmail.com"
            className="inline-flex items-center justify-center gap-3 border-2 border-terracotta text-terracotta px-8 py-4 rounded-full font-semibold hover:bg-terracotta hover:text-cream transition-all duration-200"
          >
            <MailIcon />
            Email
          </a>
        </div>

        <div className="border-t border-brown-light/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-black text-2xl text-brown-dark">
            Bianca Corcheș
          </span>
          <span className="text-brown-light text-sm">
            © 2026 Bianca Corcheș · Creatoare de conținut
          </span>
          <a
            href="https://www.instagram.com/bianca.corches/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown-light text-sm hover:text-terracotta transition-colors"
          >
            @bianca.corches
          </a>
        </div>
      </div>
    </section>
  )
}
