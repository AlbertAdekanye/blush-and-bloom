import { Gift, Heart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Curated selections",
    description:
      "Fashion, beauty and lifestyle essentials carefully selected for the modern woman.",
  },
  {
    icon: ShieldCheck,
    title: "Premium quality",
    description:
      "Beautiful, timeless products you can confidently love and rely on.",
  },
  {
    icon: Gift,
    title: "Perfect for gifting",
    description:
      "Thoughtfully selected pieces for you and the special women in your life.",
  },
  {
    icon: Heart,
    title: "Made for you",
    description:
      "Because every woman deserves to feel comfortable, stylish and confident.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-wine px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-blush-600/20 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="https://lojaanimale.vtexassets.com/arquivos/ids/1937430/52151663_0005_1-REGATA-MALHA-DECOTE-CANOA.jpg?v=638894424000230000"
              alt="Black woman wearing an elegant black top"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/60 p-5 backdrop-blur-md">
              <p className="font-serif text-2xl font-bold">
                Beauty. Fashion.
                <span className="italic text-blush-400"> Inspiration.</span>
              </p>

              <p className="mt-2 text-sm text-white/65">
                Inspired by you. Created for every version of you.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blush-400">
            About Inspired by Anna
          </p>

          <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Curated pieces.
            <span className="block italic text-blush-500">Confident you.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Inspired by Anna is a fashion, beauty and lifestyle boutique created
            to help women feel beautiful, comfortable and confident every day.
          </p>

          <p className="mt-4 max-w-xl leading-8 text-white/65">
            From silky nightwear and flattering gym sets to beauty products,
            fragrances and pretty accessories, every item is selected with your
            unique style in mind.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-blush-500/50 hover:bg-blush-700/10"
                >
                  <div className="mb-4 inline-flex rounded-full bg-blush-600/20 p-3 text-blush-400">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-serif text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
