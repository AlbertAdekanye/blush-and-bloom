import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

function WhatsAppCTA() {
  const whatsappNumber = "2349064387743";

  const message = encodeURIComponent(
    "Hello Inspired by Anna, I would like to shop your collection. Please show me the available products.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="bg-cream px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-black px-6 py-16 text-center text-white sm:px-10 lg:py-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blush-700/40 blur-[100px]" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-burgundy/60 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blush-500/30 bg-blush-700/15 px-4 py-2 text-sm font-semibold text-blush-300">
            <Sparkles size={16} />
            Personal shopping made easy
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Found something that
            <span className="italic text-blush-500"> inspires you?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65 sm:text-lg">
            Send us a WhatsApp message to confirm availability, select your size
            and complete your order.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-blush-600 px-8 py-4 font-bold text-white shadow-xl shadow-blush-700/25 transition hover:-translate-y-0.5 hover:bg-blush-500"
          >
            <MessageCircle size={21} />
            Start shopping on WhatsApp
            <ArrowUpRight size={19} />
          </a>

          <p className="mt-5 text-sm text-white/45">
            We’ll respond with availability and delivery information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppCTA;
