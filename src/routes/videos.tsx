import { createFileRoute } from "@tanstack/react-router";
import { Video, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { whatsappHref } from "@/lib/site-data";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos | Patna Aircon — AC, Chillers & Cooling Solutions in Patna" },
      {
        name: "description",
        content:
          "Watch videos from Patna Aircon showcasing AC products, chillers, VRF systems and installation services in Patna. New videos coming soon.",
      },
      { property: "og:title", content: "Videos — Patna Aircon" },
      { property: "og:description", content: "Product and installation videos from Patna Aircon." },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl">Videos</h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Product showcases, installation walkthroughs and customer experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-secondary text-muted-foreground"
            >
              <Video className="size-8 text-primary" />
              <span className="text-sm font-medium">Video coming soon</span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
          <h2 className="text-xl font-bold text-navy">Want product or installation videos?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Contact Patna Aircon and we'll share videos and details for the AC product or cooling
            solution you're interested in.
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

      <CtaBanner />
    </>
  );
}
