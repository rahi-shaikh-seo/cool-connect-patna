import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";
import { CATEGORIES, ALL_PRODUCTS, whatsappHref } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services | AC, Chillers, VRF & Cassette AC Dealer in Patna" },
      {
        name: "description",
        content:
          "Explore Patna Aircon products & services — air cooled chillers, duct AC, split AC, cassette AC, VRF systems, floor standing AC, cold room units and AC installation service in Patna.",
      },
      { property: "og:title", content: "Products & Services — Patna Aircon" },
      { property: "og:description", content: "AC, chillers, VRF, cassette AC, cold room units & installation in Patna." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: ALL_PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              category: p.category,
              description: p.description,
              brand: p.name.toLowerCase().includes("toshiba") ? "Toshiba" : "Carrier",
            },
          })),
        }),
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            Products & Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Premium air conditioning and cooling solutions for residential, commercial and
            industrial needs in Patna and nearby areas.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16">
        {CATEGORIES.map((c) => (
          <section key={c.slug} id={c.slug} className="scroll-mt-24">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-2xl font-bold text-navy">{c.title}</h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">{c.description}</p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.products.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBanner />
    </>
  );
}
