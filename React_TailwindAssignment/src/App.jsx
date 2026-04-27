function App() {
  const navLinks = ['HOME', 'ABOUT ME', 'RESUME', 'PORTFOLIO', 'TESTIMONIALS', 'CONTACT']
  const stats = [
    { value: '15+', label: 'YEARS EXPERIENCE' },
    { value: '350+', label: 'PROJECTS DONE' },
    { value: '200+', label: 'HAPPY CLIENTS' },
    { value: '45K', label: 'FOLLOWERS' },
  ]

  const portfolioItems = [
    'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
  ]

  const testimonials = [
    { name: 'Janny', text: 'Very clean process and strong creative direction.' },
    { name: 'Mila', text: 'Fast delivery and highly polished visual work.' },
    { name: 'Luna', text: 'Great communication and amazing design eye.' },
    { name: 'John', text: 'The final portfolio exceeded expectations.' },
  ]

  const sideMenu = (
    <aside className="w-full md:w-47.5 border-r border-black/10">
      <div className="h-35 bg-neutral-200 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80"
          alt="Benjamin portrait"
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div className="bg-[#f5b82f] px-8 py-8">
        <ul className="space-y-3 text-[12px] font-bold tracking-[0.18em] text-black">
          {navLinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  )

  const iconRail = (
    <div className="hidden md:flex flex-col items-center gap-3 rounded-full bg-[#f5b82f] px-2 py-3">
      {['^', 'o', '[]', '<>', '*'].map((icon, index) => (
        <span key={`${icon}-${index}`} className="text-[10px] font-black text-black leading-none">
          {icon}
        </span>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen px-4 py-10 md:px-6">
      <main className="mx-auto flex max-w-280 flex-col gap-10">
        <section className="relative overflow-hidden bg-[#ececec] shadow-[0_18px_36px_rgba(0,0,0,0.35)]">
          <div className="grid md:grid-cols-[1fr_1.25fr]">
            <div className="space-y-4 px-7 py-14 md:px-14 md:py-20">
              <p className="font-['Oswald'] text-4xl uppercase tracking-wide text-black">Hi There!</p>
              <h1 className="font-['Oswald'] text-5xl uppercase leading-tight text-black md:text-6xl">
                I&apos;m{' '}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: '1px #f5b82f' }}
                >
                  Benjamin
                </span>
              </h1>
              <p className="inline-block bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5b82f]">
                Graphic Designer / Photographer
              </p>
              <p className="max-w-95 text-sm leading-relaxed text-black/70">
                Veritatis erroris earum fuga. Proident nisi nonsequio saepe cita verit beaumn urit.
                Quis et eos minimaque pene nonet aperitone common vlore.
              </p>
              <button className="rounded-full bg-[#f5b82f] px-6 py-3 text-xs font-extrabold tracking-[0.14em] text-black shadow-sm">
                MORE ABOUT ME
              </button>
            </div>

            <div className="relative min-h-90 bg-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80"
                alt="Benjamin"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">{iconRail}</div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ececec] shadow-[0_14px_30px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col md:flex-row">
            {sideMenu}

            <div className="flex-1 px-6 py-8 md:px-10 md:py-10">
              <h2 className="border border-black/15 py-3 text-center font-['Oswald'] text-5xl uppercase tracking-widest text-black">
                About Me
              </h2>
              <p className="mt-6 text-2xl font-light text-black/80">
                I&apos;m <span className="font-extrabold text-black">Benjamin Smith</span>, Graphic Designer /
                Photographer
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black/60">
                Veritatis erroris earum fuga. Ea cuspier favorin nonsequio acceta cis vernbeauum kurit.
                Quis et eos a minima pene nonet aperitone comitis vlore reptis undeitatis et eos estem
                hariped quosauce verum quiquean faceti quis volupta.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-[1fr_1fr]">
                <div className="grid grid-cols-2 bg-[#0f1115] text-white">
                  {stats.map((item) => (
                    <div key={item.label} className="border border-white/10 p-6">
                      <p className="text-5xl font-black text-[#f5b82f]">{item.value}</p>
                      <p className="mt-2 text-[11px] font-bold tracking-widest text-white/70">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-5">
                  <h3 className="font-['Oswald'] text-3xl uppercase text-black">What I Do?</h3>
                  <div className="space-y-4 text-sm text-black/70">
                    <div>
                      <p className="font-black uppercase tracking-[0.08em] text-black">Print Design</p>
                      <p>Create modern and high-impact print compositions.</p>
                    </div>
                    <div>
                      <p className="font-black uppercase tracking-[0.08em] text-black">Web Design</p>
                      <p>Build structured visual systems for engaging websites.</p>
                    </div>
                    <div>
                      <p className="font-black uppercase tracking-[0.08em] text-black">Photography</p>
                      <p>Capture stories through contrast-rich portrait sessions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 md:block">{iconRail}</div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="relative bg-[#ececec] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
            <div className="flex min-h-70">
              {sideMenu}
              <div className="flex-1 px-6 py-6">
                <h3 className="border border-black/15 py-2 text-center font-['Oswald'] text-4xl uppercase tracking-widest">
                  Resume
                </h3>
                <div className="mt-6 grid gap-4 text-sm text-black/70 md:grid-cols-2">
                  <div>
                    <p className="font-extrabold uppercase text-black">Education</p>
                    <p className="mt-1">Computer Science, Tech School</p>
                  </div>
                  <div>
                    <p className="font-extrabold uppercase text-black">Experience</p>
                    <p className="mt-1">Senior Designer, Pixel Studio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 md:block">{iconRail}</div>
          </article>

          <article className="relative bg-[#ececec] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
            <div className="flex min-h-70">
              {sideMenu}
              <div className="flex-1 px-6 py-6">
                <h3 className="border border-black/15 py-2 text-center font-['Oswald'] text-4xl uppercase tracking-widest">
                  Portfolio
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {portfolioItems.map((img, idx) => (
                    <img key={idx} src={img} alt={`portfolio ${idx + 1}`} className="h-24 w-full object-cover" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 md:block">{iconRail}</div>
          </article>
        </section>

        <section className="relative overflow-hidden bg-[#ececec] shadow-[0_14px_30px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col md:flex-row">
            {sideMenu}
            <div className="flex-1 px-6 py-8 md:px-10 md:py-10">
              <h2 className="border border-black/15 py-3 text-center font-['Oswald'] text-5xl uppercase tracking-widest text-black">
                Portfolio
              </h2>
              <div className="mt-6 flex flex-wrap gap-6 text-xs font-bold tracking-[0.14em] text-black/70">
                <span className="text-black">ALL</span>
                <span>GRAPHIC DESIGN</span>
                <span>WEB DESIGN</span>
                <span className="text-black/40">PHOTOGRAPHY</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {portfolioItems.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`feature portfolio ${idx + 1}`}
                    className="h-40 w-full object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 md:block">{iconRail}</div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="relative bg-[#ececec] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
            <div className="flex min-h-77.5">
              {sideMenu}
              <div className="flex-1 px-6 py-6">
                <h3 className="border border-black/15 py-2 text-center font-['Oswald'] text-4xl uppercase tracking-widest">
                  Testimonials
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {testimonials.map((item) => (
                    <div key={item.name} className="bg-[#0f1115] p-4 text-white">
                      <p className="text-sm font-black text-[#f5b82f]">{item.name}</p>
                      <p className="mt-1 text-xs text-white/70">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 md:block">{iconRail}</div>
          </article>

          <article className="relative bg-[#ececec] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
            <div className="flex min-h-77.5">
              {sideMenu}
              <div className="flex-1 px-6 py-6">
                <h3 className="border border-black/15 py-2 text-center font-['Oswald'] text-4xl uppercase tracking-widest">
                  Contact
                </h3>
                <p className="mt-8 text-black/70">Feel free to contact me!</p>
                <div className="mt-8 grid gap-5 text-sm font-semibold text-black/80 sm:grid-cols-2">
                  <p>BENJAMIN@MAIL.COM</p>
                  <p>+91 9898989898</p>
                </div>
                <p className="mt-12 font-['Oswald'] text-2xl uppercase tracking-[0.12em] text-black/80">
                  Thanks For Patience!
                </p>
              </div>
            </div>
            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 md:block">{iconRail}</div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App