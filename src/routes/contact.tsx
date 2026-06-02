import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EnquiryForm } from "@/components/EnquiryForm";
import { MapSection } from "@/components/MapSection";
import { SITE, callHref, whatsappHref } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Patna Aircon — AC Dealer in Patna" },
      {
        name: "description",
        content:
          "Contact Patna Aircon in Phulwari Sharif, Patna for AC products, chillers, VRF, cassette AC, duct AC, cold room units and AC installation. Call, WhatsApp or send an enquiry.",
      },
      { property: "og:title", content: "Contact Patna Aircon" },
      { property: "og:description", content: "Call, WhatsApp or enquire about AC products & installation in Patna." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: MapPin, label: "Location", value: SITE.address },
    { icon: MessageCircle, label: "WhatsApp Number", value: SITE.phoneDisplay, href: callHref(), target: "_blank", rel: "noopener noreferrer" },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Reach out to Patna Aircon for product details, quotations and AC installation service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Patna Aircon</h2>
            <div className="mt-6 space-y-3">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <d.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="font-medium text-navy hover:text-primary hover:underline" target={d.target} rel={d.rel}>{d.value}</a>
                    ) : (
                      <div className="font-medium text-navy">{d.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-border p-6 shadow-card">
            <h2 className="text-xl font-bold text-navy">Send an Enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill the form and we'll get back to you quickly.
            </p>
            <div className="mt-5">
              <EnquiryForm />
            </div>
          </Card>
        </div>
      </section>

      <MapSection />
    </>
  );
}
