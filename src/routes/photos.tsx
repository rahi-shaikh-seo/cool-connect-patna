import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { GALLERY_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/photos")({
  head: () => ({
    meta: [
      { title: "Photos & Gallery | Patna Aircon — AC, Chillers & Installation in Patna" },
      {
        name: "description",
        content:
          "Photo gallery of Patna Aircon — AC products, chillers, VRF systems, cassette AC units, installation work and commercial cooling projects in Patna.",
      },
      { property: "og:title", content: "Gallery — Patna Aircon" },
      { property: "og:description", content: "Product photos, installation work and commercial cooling projects in Patna." },
      { property: "og:url", content: "/photos" },
    ],
    links: [{ rel: "canonical", href: "/photos" }],
  }),
  component: PhotosPage,
});

function PhotosPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl">Photos & Gallery</h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Product photos, AC units, chillers, installation work and commercial projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border shadow-card">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
