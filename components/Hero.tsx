export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #FEFAF6 0%, #F5E6D3 55%, #EDD5C0 100%)',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-24 right-12 w-72 h-72 rounded-full bg-terracotta-light/25 animate-float" />
      <div className="absolute bottom-28 left-6 w-48 h-48 rounded-full bg-gold/20 animate-float-delay" />
      <div className="absolute top-1/3 left-20 w-24 h-24 rounded-full bg-terracotta/10 animate-float-delay-2" />
      <div className="absolute bottom-20 right-36 w-14 h-14 rounded-full bg-terracotta/20" />
      <div className="absolute top-16 left-1/3 w-8 h-8 rounded-full bg-gold/30" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <p
          className="text-xs font-semibold tracking-[0.25em] text-terracotta uppercase mb-8 animate-fadeIn"
        >
          ✦ &nbsp; bun venit &nbsp; ✦
        </p>

        <h1
          className="font-display font-black leading-none text-brown-dark mb-2 animate-fadeInUp"
          style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}
        >
          Bianca
        </h1>

        <h1
          className="font-display font-black leading-none text-gradient animate-fadeInUp delay-100"
          style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}
        >
          Corcheș
        </h1>

        <p
          className="text-base md:text-xl text-brown-mid font-medium tracking-widest uppercase mt-8 mb-6 animate-fadeInUp delay-200"
        >
          Creatoare de conținut &nbsp;·&nbsp; Social Media Specialist
        </p>

        <p
          className="max-w-lg mx-auto text-brown-light text-base md:text-lg leading-relaxed mb-12 animate-fadeInUp delay-300"
        >
          Adaptabilitate. Creativitate. Autenticitate.
          <br />
          Construiesc conținut care conectează branduri cu audiențele lor.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400"
        >
          <a
            href="#colaborari"
            className="bg-terracotta text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta-dark transition-all duration-200 hover:scale-105 shadow-lg shadow-terracotta/25"
          >
            Proiectele mele
          </a>
          <a
            href="#despre"
            className="border-2 border-terracotta text-terracotta px-8 py-4 rounded-full font-semibold hover:bg-terracotta hover:text-cream transition-all duration-200"
          >
            Despre mine
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce animate-fadeIn delay-500">
        <div className="w-6 h-10 border-2 border-brown-light/40 rounded-full flex items-start justify-center pt-1">
          <div className="w-1 h-3 bg-brown-light/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
