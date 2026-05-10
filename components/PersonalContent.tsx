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

function ReelBadge() {
  return (
    <div className="absolute top-3 right-3">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span className="text-white text-[10px] font-semibold">Reel</span>
      </div>
    </div>
  )
}

const contentCards = [
  {
    label: 'Content pentru evenimente',
    bg: 'linear-gradient(135deg, #F8C8B8, #E88070)',
    url: 'https://www.instagram.com/reel/DVYYBbXjDY6/',
  },
  {
    label: 'Fashion content',
    bg: 'linear-gradient(135deg, #EDD5A0, #D4A870)',
    url: 'https://www.instagram.com/reel/DXWwARpDGDt/',
  },
  {
    label: 'Food content',
    bg: 'linear-gradient(135deg, #E8B09A, #C4775A)',
    url: 'https://www.instagram.com/reel/DTK6hWJDOCQ/',
  },
]

async function fetchOgImage(reelUrl: string): Promise<string | null> {
  try {
    const res = await fetch(reelUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Twitterbot/1.0)',
        Accept: 'text/html,application/xhtml+xml',
      },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const html = await res.text()
    const m =
      html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/) ??
      html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/)
    if (!m?.[1]) return null
    return m[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  } catch {
    return null
  }
}

export default async function PersonalContent() {
  const thumbnails = await Promise.all(
    contentCards.map((card) => fetchOgImage(card.url))
  )

  return (
    <section id="continut" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase mb-5">
              ✦ &nbsp; viziunea mea
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-brown-dark leading-tight">
              Conținut
              <br />
              personal
            </h2>
          </div>
          <a
            href="https://www.instagram.com/bianca.corches/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-0 inline-flex items-center gap-3 bg-terracotta text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-terracotta-dark transition-all duration-200 hover:scale-105 shadow-lg shadow-terracotta/25"
          >
            <InstagramIcon />
            @bianca.corches
          </a>
        </div>

        <p className="text-brown-mid text-lg max-w-2xl mb-12 leading-relaxed">
          Pe pagina mea personală îmi exprim{' '}
          <strong className="text-brown-dark">propria viziune</strong> și
          experimentez cu stiluri diferite de conținut. Un spațiu în care
          autenticitatea mea iese cu adevărat la iveală.
        </p>

        {/* Reels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {contentCards.map((card, i) => (
            <a
              key={i}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[9/16] group overflow-hidden rounded-2xl"
            >
              {/* Thumbnail or gradient fallback */}
              {thumbnails[i] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnails[i]!}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: card.bg }}
                />
              )}

              {/* Dark gradient at bottom for label legibility */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white text-sm font-semibold drop-shadow">
                  {card.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-cream font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Vezi pe Instagram ↗
                </span>
              </div>

              <ReelBadge />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/bianca.corches/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-terracotta font-semibold text-lg hover:text-terracotta-dark transition-colors group"
          >
            Urmărește-mă pe Instagram
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
