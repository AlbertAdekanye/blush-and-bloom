import { MessageCircle } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "2340000000000";

  const formattedPrice = product.price.toLocaleString("en-NG");

  const message = encodeURIComponent(
    `Hello Inspired by Anna, I would like to order the ${product.name} for ₦${formattedPrice}. Is it available?`,
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-blush-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-blush-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            New arrival
          </span>
        )}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`Order ${product.name} on WhatsApp`}
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 font-bold text-white opacity-0 transition duration-300 hover:bg-blush-600 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
        >
          <MessageCircle size={18} />
          Order on WhatsApp
        </a>
      </div>

      <div className="px-1 pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blush-600">
          {product.category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-bold leading-6 text-rosewood">
            {product.name}
          </h3>

          <p className="shrink-0 font-black text-rosewood">₦{formattedPrice}</p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-full border border-blush-300 px-4 py-3 text-sm font-bold text-blush-700 transition hover:border-blush-600 hover:bg-blush-600 hover:text-white sm:hidden"
        >
          <MessageCircle size={17} />
          Order now
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
