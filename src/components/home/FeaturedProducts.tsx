import { useState } from "react";
import { products } from "../../data/products";
import type { ProductCategory } from "../../types/product";
import ProductCard from "../products/ProductCard";

type CategoryFilter = "All" | ProductCategory;

const categories: CategoryFilter[] = [
  "All",
  "Nightwear",
  "Bras & Panties",
  "Gymwear",
  "Beauty",
  "Perfume & Oils",
  "Accessories",
];

function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="shop" className="bg-cream px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blush-600">
            Shop the collection
          </p>

          <h2 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-rosewood sm:text-5xl">
            Curated pieces,
            <span className="italic text-blush-600"> inspired by you.</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-rosewood/65">
            Discover fashion, beauty and lifestyle essentials selected for your
            comfort, confidence and everyday style.
          </p>
        </div>

        <div
          className="mb-10 flex gap-3 overflow-x-auto pb-3"
          aria-label="Filter products by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-blush-200 bg-white text-rosewood hover:border-blush-600 hover:text-blush-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-blush-200 bg-white px-6 py-16 text-center">
            <p className="font-serif text-2xl font-bold text-rosewood">
              More beautiful pieces are coming
            </p>

            <p className="mt-2 text-rosewood/60">
              Please check back soon or contact us on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
