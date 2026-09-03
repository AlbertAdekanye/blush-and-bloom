import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import SearchOverlay from "../products/SearchOverlay";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            aria-label="Inspired by Anna home"
            className="flex items-baseline gap-1 text-xl tracking-tight sm:text-2xl"
          >
            <span className="font-serif text-2xl font-bold italic sm:text-3xl">
              Inspired
            </span>

            <span className="font-semibold text-blush-500">by Anna</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-white/70 transition hover:text-blush-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
              className="rounded-full p-2.5 text-white transition hover:bg-white/10 hover:text-blush-400"
            >
              <Search size={21} />
            </button>

            <a
              href="#shop"
              className="hidden rounded-full bg-blush-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blush-500 sm:inline-flex"
            >
              Shop now
            </a>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="rounded-full p-2.5 text-white transition hover:bg-white/10 hover:text-blush-400 md:hidden"
            >
              {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 font-semibold text-white transition hover:bg-white/10 hover:text-blush-400"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#shop"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-full bg-blush-600 px-5 py-3 text-center font-bold text-white"
              >
                Shop now
              </a>
            </div>
          </div>
        )}
      </header>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
