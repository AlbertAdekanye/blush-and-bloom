import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  const whatsappNumber = "2340000000000";

  const message = encodeURIComponent(
    "Hello Inspired by Anna, I would like to make an enquiry.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Inspired by Anna on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-4 font-bold text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-7 sm:right-7 sm:px-5"
    >
      <MessageCircle size={23} />

      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

export default FloatingWhatsApp;
