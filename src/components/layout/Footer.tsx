import { Camera, Mail, MessageCircle } from "lucide-react";

const shopLinks = [
  { label: "Nightwear", href: "#shop" },
  { label: "Bras & Panties", href: "#shop" },
  { label: "Gymwear", href: "#shop" },
  { label: "Beauty Products", href: "#shop" },
  { label: "Accessories", href: "#shop" },
];

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-5 pt-16 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#home" className="inline-flex items-baseline gap-1 text-2xl">
            <span className="font-serif text-3xl font-bold italic">
              Inspired
            </span>

            <span className="font-semibold text-blush-500">by Anna</span>
          </a>

          <p className="mt-5 max-w-md leading-7 text-white/55">
            A fashion, beauty and lifestyle boutique offering thoughtfully
            selected pieces for every version of you.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href="https://instagram.com/inspiredbyanna.boutique"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Inspired by Anna on Instagram"
              className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-blush-500 hover:bg-blush-600 hover:text-white"
            >
              <Camera size={20} />
            </a>

            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Inspired by Anna on Facebook"
              className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-blush-500 hover:bg-blush-600 hover:text-white"
            >
              <Facebook size={20} />
            </a> */}

            <a
              href="mailto:inspiredbyanna.boutique@gmail.com"
              aria-label="Email Inspired by Anna"
              className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-blush-500 hover:bg-blush-600 hover:text-white"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://wa.me/2349064387743"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Inspired by Anna on WhatsApp"
              className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-blush-500 hover:bg-blush-600 hover:text-white"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold">Explore</h3>

          <ul className="mt-5 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-blush-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold">Shop</h3>

          <ul className="mt-5 space-y-3">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-blush-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Inspired by Anna. All rights reserved.</p>

        <p>Inspired by you. Made for you. ♥</p>
      </div>
    </footer>
  );
}

export default Footer;
