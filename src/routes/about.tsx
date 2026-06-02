import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck, Award, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/CtaBanner";
import aboutImg from "@/assets/chiller.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Patna Aircon — Authorized AC Dealer in Patna" },
      {
        name: "description",
        content:
          "Patna Aircon, established 2020 in Patna, Bihar, is an authorized wholesale dealer and service provider of AC, chillers, VRF, cassette AC, duct AC, cold room units and installation services.",
      },
      { property: "og:title", content: "About Patna Aircon" },
      { property: "og:description", content: "Authorized AC dealer & cooling solution provider in Patna, Bihar since 2020." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl">About Patna Aircon</h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            A trusted name in air conditioning and cooling solutions in Patna, Bihar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Who We Are</h2>
            <p className="mt-4 text-muted-foreground">
              Patna Aircon was established in 2020 in Patna, Bihar. We are a sole proprietorship
              firm engaged as an authorized wholesale dealer and service provider of air
              conditioning and cooling products.
            </p>
            <p className="mt-4 text-muted-foreground">
              We provide quality AC products and cooling solutions for residential, commercial, and
              industrial requirements. Our product range includes cassette AC, duct AC, split AC,
              VRF systems, air cooled chillers, floor standing AC, cold room condensing units, and
              AC installation services.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our focus is to provide reliable products, honest guidance, professional service, and
              complete customer satisfaction.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={aboutImg}
              alt="Air cooled chiller supplied by Patna Aircon in Patna"
              loading="lazy"
              width={1024}
              height={768}
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, v: "Authorized", l: "Wholesale Dealer" },
            { icon: Award, v: "5 Years", l: "Experience" },
            { icon: Star, v: "5.0", l: "Customer Rating" },
            { icon: MapPin, v: "Patna", l: "& Nearby Areas" },
          ].map((s) => (
            <Card key={s.l} className="border-border p-6 text-center shadow-card">
              <s.icon className="mx-auto size-7 text-primary" />
              <div className="mt-3 text-lg font-bold text-navy">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="border-border p-7 shadow-card">
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Target className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">
              To provide trusted, efficient, and affordable air conditioning solutions to customers
              in Patna and nearby areas.
            </p>
          </Card>
          <Card className="border-border p-7 shadow-card">
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Eye className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">
              To become one of the most reliable HVAC and cooling solution providers in Bihar.
            </p>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/products">Explore Our Products</Link>
          </Button>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
