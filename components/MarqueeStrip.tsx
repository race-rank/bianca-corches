const items = [
  'Creatoare de conținut',
  'Editare Video',
  'Social Media',
  'Reels & Stories',
  'Adaptabilitate',
  'Conținut Autentic',
  'Brand Collaboration',
  'Content Strategy',
]

export default function MarqueeStrip() {
  const repeated = [...items, ...items]

  return (
    <div className="overflow-hidden bg-terracotta py-4 select-none">
      <div className="animate-marquee">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4">
            <span className="text-cream font-semibold text-sm tracking-widest uppercase">
              {item}
            </span>
            <span className="text-terracotta-light text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
