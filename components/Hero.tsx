import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #FEFAF6 0%, #F5E6D3 55%, #EDD5C0 100%)',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-24 right-4 w-72 h-72 rounded-full bg-terracotta-light/20 animate-float" />
      <div className="absolute bottom-28 left-6 w-40 h-40 rounded-full bg-gold/20 animate-float-delay" />
      <div className="absolute top-1/3 left-12 w-16 h-16 rounded-full bg-terracotta/10 animate-float-delay-2" />
      <div className="absolute top-16 left-1/3 w-8 h-8 rounded-full bg-gold/30" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.25em] text-terracotta uppercase mb-8 animate-fadeIn">
              ✦ &nbsp; bun venit &nbsp; ✦
            </p>

            <h1
              className="font-display font-black leading-none text-brown-dark mb-2 animate-fadeInUp"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
            >
              Bianca
            </h1>
            <h1
              className="font-display font-black leading-none text-gradient animate-fadeInUp delay-100"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
            >
              Corcheș
            </h1>

            <p className="text-base md:text-lg text-brown-mid font-medium tracking-widest uppercase mt-7 mb-6 animate-fadeInUp delay-200">
              Creatoare de conținut &nbsp;·&nbsp; Social Media
            </p>

            <p className="max-w-md mx-auto lg:mx-0 text-brown-light text-base md:text-lg leading-relaxed mb-10 animate-fadeInUp delay-300">
              Adaptabilitate. Creativitate. Autenticitate.
              <br />
              Construiesc conținut care conectează branduri cu audiențele lor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp delay-400">
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

          {/* Right: photo */}
          <div className="flex justify-center lg:justify-end animate-fadeIn delay-200">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-[40%] rotate-6 opacity-40"
                style={{
                  background:
                    'linear-gradient(135deg, #C4775A, #D4A870)',
                }}
              />
              {/* Second ring */}
              <div
                className="absolute -inset-1.5 rounded-[40%] -rotate-3 opacity-20"
                style={{ background: '#C4775A' }}
              />
              {/* Photo */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-[36%] overflow-hidden shadow-2xl shadow-terracotta/20">
                <Image
                  src="/me.jpeg"
                  alt="Bianca Corcheș"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

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
