import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      className="fixed inset-0 z-[100] overflow-y-auto bg-cream"
    >
      <div className="sticky top-0 z-10 border-b border-blush-100 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-5 sm:px-8">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-rosewood/45"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search nightwear, gymwear, beauty..."
              autoFocus
              className="w-full rounded-full border border-blush-200 bg-white py-3.5 pl-12 pr-5 text-base text-rosewood outline-none transition placeholder:text-rosewood/40 focus:border-blush-600 focus:ring-4 focus:ring-blush-100"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close product search"
            className="shrink-0 rounded-full bg-black p-3 text-white transition hover:bg-blush-600"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blush-600">
            {searchTerm
              ? `${filteredProducts.length} results found`
              : "All products"}
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-rosewood">
            {searchTerm
              ? `Search results for “${searchTerm}”`
              : "What are you looking for?"}
          </h2>
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
              No products found
            </p>

            <p className="mt-2 text-rosewood/60">
              Try searching for nightwear, bras, gymwear or beauty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchOverlay;
