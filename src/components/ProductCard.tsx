import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Product, callHref, whatsappHref } from "@/lib/site-data";

export function ProductCard({ product }: { product: Product }) {
  const enquiry = `Hello Patna Aircon, I would like an enquiry/quotation for: ${product.name}.`;
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border shadow-card transition-shadow hover:shadow-elevated">
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`${product.name} — ${product.category} dealer in Patna`}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-primary">
          {product.category}
        </span>
        <h3 className="mt-1 text-base font-semibold text-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex gap-2">
          <Button asChild variant="whatsapp" size="sm" className="flex-1">
            <a href={whatsappHref(enquiry)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> Enquiry Now
            </a>
          </Button>
          <Button asChild variant="hero" size="sm" className="flex-1">
            <a href={callHref()}>
              <Phone className="size-4" /> Call Now
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
