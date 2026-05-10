function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

const clients = [
  {
    handle: 'stopbutik.outlet',
    name: 'Stop Butik',
    category: 'Fashion · Outlet',
    description:
      'Am creat conținut video de calitate pentru unul dintre cele mai active magazine de fashion outlet. Stilul vizual s-a adaptat constant la direcția brandului, punând accent pe editare îngrijită și prezentare atractivă a produselor.',
    highlights: [
      'Editare video profesionistă',
      'Reels & Stories',
      'Adaptabilitate la brief',
      'Stil editorial curat',
    ],
    url: 'https://www.instagram.com/stopbutik.outlet',
    bgStyle: {
      background: 'linear-gradient(135deg, #FFF0EC, #FFE4DC)',
    },
    badgeStyle: { background: '#FFD5C8', color: '#7A2E1A' },
    accentColor: '#C4775A',
  },
  {
    handle: 'camigo.cluj',
    name: 'Camigo Cluj',
    category: 'Lifestyle · Cluj',
    description:
      'Colaborare pentru Camigo Cluj în care am demonstrat capacitatea de a răspunde rapid la schimbări și de a livra conținut relevant. Fiecare cerință a primit o soluție creativă adaptată la identitatea brandului.',
    highlights: [
      'Conținut creativ & fresh',
      'Adaptabilitate rapidă',
      'Video editing',
      'Viziune de brand',
    ],
    url: 'https://www.instagram.com/camigo.cluj',
    bgStyle: {
      background: 'linear-gradient(135deg, #FFFAEC, #FFF0C0)',
    },
    badgeStyle: { background: '#FFE89A', color: '#6B4800' },
    accentColor: '#D4A870',
  },
]

export default function Clients() {
  return (
    <section id="colaborari" className="py-28 bg-peach/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase mb-5">
            ✦ &nbsp; portofoliu
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-brown-dark mb-6">
            Colaborări
          </h2>
          <p className="text-brown-mid text-lg max-w-2xl mx-auto leading-relaxed">
            Branduri pentru care am livrat conținut de calitate, adaptat
            cerințelor și viziunii lor.
          </p>
        </div>

        {/* Client cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div
              key={client.handle}
              className="rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={client.bgStyle}
            >
              {/* Card header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brown-dark mb-2">
                    {client.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={client.badgeStyle}
                  >
                    {client.category}
                  </span>
                </div>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/80 hover:bg-white text-brown-dark px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
                >
                  <InstagramIcon />
                  @{client.handle}
                </a>
              </div>

              <p className="text-brown-mid leading-relaxed mb-7 text-base">
                {client.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {client.highlights.map((h) => (
                  <span
                    key={h}
                    className="bg-white/70 text-brown-dark px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
