import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site-data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Enquiry"
        className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
