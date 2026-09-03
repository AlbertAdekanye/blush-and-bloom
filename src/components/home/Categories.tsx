import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Nightwear",
    description: "Soft and dreamy pieces for cosy nights.",
    image:
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Gymwear",
    description: "Confident fits made to move with you.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Keyholders",
    description: "Cute little details for your everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Girly Accessories",
    description: "Pretty extras that complete your look.",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
  },
];

function Categories() {
  return (
    <section id="categories" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blush-600">
              Shop your favourites
            </p>

            <h2 className="max-w-xl text-3xl font-black tracking-tight text-rosewood sm:text-5xl">
              A little something for every mood.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-rosewood/65">
            From bedtime comfort to workout confidence, discover pretty pieces
            selected to make every day feel special.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#shop"
              className={`group relative overflow-hidden rounded-[2rem] ${
                index === 0 || index === 3
                  ? "sm:aspect-[4/5]"
                  : "sm:aspect-[4/5] lg:translate-y-8"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-rosewood/80 via-rosewood/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-2xl font-black">{category.name}</h3>

                  <span className="rounded-full border border-white/40 bg-white/15 p-2.5 backdrop-blur-md transition group-hover:bg-white group-hover:text-rosewood">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/80">
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
