import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-blush-50">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blush-300/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blush-700">
            <Sparkles size={16} />
            Everything cute, comfy and feminine
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-rosewood sm:text-6xl lg:text-7xl">
            Made for your
            <span className="block font-serif italic text-blush-600">
              pretty moments.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-rosewood/70 sm:text-lg">
            Discover comfortable nightwear, flattering gym sets and the sweetest
            accessories to brighten your everyday life.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-600 px-7 py-4 font-bold text-white shadow-lg shadow-blush-600/20 transition hover:-translate-y-0.5 hover:bg-blush-700"
            >
              Explore collection
              <ArrowRight size={19} />
            </a>

            <a
              href="https://wa.me/2349064387743"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blush-300 bg-white px-7 py-4 font-bold text-rosewood transition hover:bg-blush-100"
            >
              <MessageCircle size={19} />
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-rosewood/65">
            <span>✓ Affordable pieces</span>
            <span>✓ Nationwide delivery</span>
            <span>✓ Easy WhatsApp orders</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[3rem] border-2 border-blush-300" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-blush-200 shadow-2xl shadow-blush-800/15">
            <img
              src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1200&q=85"
              alt="Woman enjoying a comfortable self-care moment"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-rosewood/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/30 bg-white/90 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blush-600">
                New collection
              </p>

              <div className="mt-2 flex items-end justify-between gap-4">
                <h2 className="text-xl font-black text-rosewood">
                  Soft, cute and confidently you
                </h2>

                <a
                  href="#shop"
                  aria-label="View the new collection"
                  className="shrink-0 rounded-full bg-rosewood p-3 text-white transition hover:bg-blush-600"
                >
                  <ArrowRight size={19} />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-12 rotate-6 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-blush-700 shadow-lg sm:-right-8">
            ✨ New arrivals
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
