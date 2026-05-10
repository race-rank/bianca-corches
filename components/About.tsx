const skills = [
  'Editare video',
  'Reels & Short-form',
  'Adaptabilitate',
  'Conținut autentic',
  'Social media',
  'Diverse domenii',
]

export default function About() {
  return (
    <section id="despre" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: bio */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase mb-5">
              ✦ &nbsp; despre mine
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-brown-dark mb-8 leading-tight">
              Creativitate<br />cu&nbsp;
              <span className="italic text-gradient">adaptabilitate</span>
            </h2>
            <p className="text-brown-mid text-lg leading-relaxed mb-5">
              Sunt{' '}
              <strong className="text-brown-dark">Bianca Corcheș</strong>, o
              creatoare de conținut cu 2 ani de prezență pe social media și 1
              an de experiență dedicată ca creatoare de conținut.
            </p>
            <p className="text-brown-mid text-lg leading-relaxed mb-5">
              Atuul meu este că{' '}
              <strong className="text-terracotta">
                mă adaptez foarte bine cerințelor clienților
              </strong>{' '}
              și am lucrat cu branduri din diverse domenii - de la modă și
              lifestyle, până la cinematografie.
            </p>
            <p className="text-brown-mid text-lg leading-relaxed mb-10">
              Pe lângă colaborările cu clienții, îmi exprim propria viziune pe{' '}
              <a
                href="https://www.instagram.com/bianca.corches/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta font-semibold underline underline-offset-4 hover:text-terracotta-dark transition-colors"
              >
                pagina personală
              </a>
              , unde autenticitatea iese la iveală.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-peach text-brown-mid px-4 py-2 rounded-full text-sm font-medium"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="space-y-4">
            <StatCard number="2" unit="ani" label="de experiență pe social media" />
            <StatCard number="1" unit="an" label="ca creatoare de conținut" />
            <StatCard number="∞" unit="" label="domenii de activitate acoperite" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  number,
  unit,
  label,
}: {
  number: string
  unit: string
  label: string
}) {
  return (
    <div
      className="flex items-center gap-6 rounded-2xl p-6 transition-shadow hover:shadow-md"
      style={{
        background: 'linear-gradient(135deg, #F5E6D3, #EDD5C0)',
      }}
    >
      <div className="flex-shrink-0 flex items-baseline gap-1">
        <span className="font-display text-6xl font-black text-terracotta leading-none">
          {number}
        </span>
        {unit && (
          <span className="font-display text-2xl font-bold text-terracotta leading-none">
            {unit}
          </span>
        )}
      </div>
      <p className="text-brown-mid font-medium text-lg leading-snug">{label}</p>
    </div>
  )
}
