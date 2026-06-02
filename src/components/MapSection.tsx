import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function MapSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-center gap-2 text-primary">
          <MapPin className="size-5" />
          <h2 className="text-xl font-semibold text-navy">Visit Us in Patna</h2>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">{SITE.address}</p>
        <div className="overflow-hidden rounded-xl border border-border shadow-card">
          <iframe
            title="Patna Aircon location on Google Maps"
            src={SITE.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
