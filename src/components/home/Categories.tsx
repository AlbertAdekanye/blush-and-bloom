import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Nightwear",
    description: "Soft satin sets made for beautiful, comfortable nights.",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/09-27-25_S3_65_ZDFNL1087_Black_KJ_PC_11-49-51_PLUS_55837_PXF.jpg?crop=center&height=691&v=1760461959&width=461",
  },
  {
    name: "Bras & Panties",
    description: "Feminine everyday essentials designed for confidence.",
    image:
      "https://n.nordstrommedia.com/it/7faae020-d573-4338-9716-75e5e5fbb34b.jpeg",
  },
  {
    name: "Women’s Gymwear",
    description: "Flattering activewear that moves comfortably with you.",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702927948-BND10206-BLACK-BANDIER-1_3_e3275090-9bba-4af3-8db8-16feeadb4d82.jpg",
  },
  {
    name: "Lip Gloss",
    description: "Glossy shades that add the perfect finishing touch.",
    image: "https://img.lojasrenner.com.br/item/931694240/zoom/13.jpg",
  },
  {
    name: "Perfume & Oils",
    description: "Captivating scents created to leave a lasting impression.",
    image:
      "https://plus.unsplash.com/premium_photo-1670445045282-36648e89af6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Girly Accessories",
    description: "Cute hair pieces, keyholders and everyday accessories.",
    image:
      "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2019/08/big-scrunchies--838x1024.jpg",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="bg-black px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blush-500">
              Shop by category
            </p>

            <h2 className="max-w-2xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to feel
              <span className="italic text-blush-500"> inspired.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-white/60">
            Explore carefully curated fashion, beauty and lifestyle pieces made
            for every version of you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-wine"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl font-bold">
                    {category.name}
                  </h3>

                  <span className="shrink-0 rounded-full border border-white/30 bg-black/30 p-2.5 backdrop-blur-md transition group-hover:border-blush-500 group-hover:bg-blush-600">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <p className="max-w-sm text-sm leading-6 text-white/70">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
