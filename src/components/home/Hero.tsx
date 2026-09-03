import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

function Hero() {
  const whatsappNumber = "2349064387743";

  const message = encodeURIComponent(
    "Hello Inspired by Anna, I would like to shop your collection.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blush-700/30 blur-[130px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-burgundy/50 blur-[130px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blush-500/30 bg-blush-700/15 px-4 py-2 text-sm font-semibold text-blush-300">
            <Sparkles size={16} />
            Fashion, beauty and lifestyle boutique
          </div>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Inspired by
            <span className="block italic text-blush-500">
              every version of you.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Curated nightwear, lingerie, women’s gymwear, beauty products and
            accessories made for your comfort, confidence and everyday style.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-600 px-7 py-4 font-bold text-white shadow-xl shadow-blush-700/20 transition hover:-translate-y-0.5 hover:bg-blush-500"
            >
              Explore collection
              <ArrowRight size={19} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-blush-500 hover:bg-blush-700/20"
            >
              <MessageCircle size={19} />
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-white/60">
            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blush-400" />
              Premium quality
            </span>

            <span className="flex items-center gap-2">
              <Sparkles size={18} className="text-blush-400" />
              Carefully curated
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-3 rounded-[2rem] border border-blush-600/40" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-wine shadow-2xl shadow-blush-900/30">
            <img
              src="https://cdn.shopify.com/s/files/1/2185/2813/files/W31036P_07765_b2_s1_a1_m239_64f02eac-b649-4858-bc59-523e846ade27_840x.jpg?v=1764975307"
              alt="Black woman wearing luxury pink satin loungewear"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/70 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blush-400">
                Inspired by Anna
              </p>

              <p className="mt-2 font-serif text-xl font-bold">
                Effortless style. Everyday luxury.
              </p>
            </div>
          </div>

          <div className="absolute -right-3 top-10 rotate-3 rounded-xl bg-blush-600 px-4 py-3 text-sm font-bold text-white shadow-xl sm:-right-8">
            Made for you ♥
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
