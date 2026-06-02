import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
          Need AC, Chiller, VRF or Installation Service in Patna?
        </h2>
        <p className="max-w-2xl text-primary-foreground/85">
          Contact Patna Aircon today on WhatsApp for product details and the best quotation on air
          conditioning and cooling solutions.
        </p>
        <div className="flex justify-center mt-2">
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" /> WhatsApp Enquiry
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
