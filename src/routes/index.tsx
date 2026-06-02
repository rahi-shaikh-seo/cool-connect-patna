import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  Award,
  Star,
  Building2,
  MapPin,
  Wrench,
  PackageCheck,
  Headphones,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/CtaBanner";
import { ProductCard } from "@/components/ProductCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { MapSection } from "@/components/MapSection";
import { CATEGORIES, FEATURED_PRODUCTS, SITE, callHref, whatsappHref } from "@/lib/site-data";
import heroImg from "@/assets/hero.jpg";
import installationImg from "@/assets/installation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patna Aircon | Authorized AC Dealer & Cooling Solutions in Patna" },
      {
        name: "description",
        content:
          "Authorized AC dealer in Patna offering chillers, VRF systems, cassette AC, duct AC, split AC, cold room units and professional AC installation services. Call Patna Aircon for the best quotation.",
      },
      { property: "og:title", content: "Patna Aircon | Authorized AC Dealer in Patna" },
      {
        property: "og:description",
        content:
          "Trusted authorized AC dealer and cooling solution provider in Patna, Bihar.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Authorized Wholesale Dealer" },
  { icon: Award, label: "5 Years Experience" },
  { icon: Star, label: "5.0 Customer Rating" },
  { icon: Building2, label: "Commercial & Residential AC" },
  { icon: MapPin, label: "Service in Patna & Nearby Areas" },
];

const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "Authorized Wholesale Dealer", desc: "Genuine, authorized supply of premium air conditioning and cooling products." },
  { icon: PackageCheck, title: "Quality Branded Products", desc: "Trusted brands like Carrier and Toshiba for lasting reliability." },
  { icon: Building2, title: "Commercial & Residential", desc: "Solutions for homes, offices, showrooms, industries and large spaces." },
  { icon: Wrench, title: "Professional AC Installation", desc: "Proper fitting, testing and dependable after-sales support." },
  { icon: MapPin, title: "Local Service Support", desc: "On-ground service support across Patna and nearby areas." },
  { icon: Headphones, title: "Quick Enquiry Response", desc: "Fast quotations and friendly, honest guidance over call or WhatsApp." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Air cooled chillers and AC condenser units on a commercial rooftop in Patna"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Star className="size-3.5 fill-current" /> 5.0 Rated · Authorized Dealer · Est. 2020
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Authorized AC Dealer & Cooling Solution Provider in Patna
            </h1>
            <p className="mt-5 text-base text-white/85 sm:text-lg">
              Patna Aircon offers trusted air conditioning products, chillers, VRF systems,
              cassette AC, duct AC, cold room units, and AC installation services for homes,
              offices, commercial spaces, and industries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href={callHref()}>
                  <Phone className="size-5" /> Call Now
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  <FileText className="size-5" /> Get Free Quote
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> WhatsApp Enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST_POINTS.map((t) => (
            <div key={t.label} className="flex items-center gap-2.5 text-sm font-medium text-navy">
              <t.icon className="size-5 shrink-0 text-primary" />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">About Patna Aircon</h2>
            <p className="mt-4 text-muted-foreground">
              Patna Aircon is a trusted air conditioning and cooling solution provider in Patna,
              Bihar. Established in 2020, we work as an authorized wholesale dealer and service
              provider for commercial, industrial, and residential air conditioning products.
            </p>
            <p className="mt-4 text-muted-foreground">
              We deal in premium AC and cooling products such as air cooled chillers, duct AC,
              split AC, cassette AC, VRF systems, floor standing AC, cold room condensing units,
              and complete AC installation services — backed by honest guidance and professional
              service.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { v: "5+", l: "Years Experience" },
                { v: "5.0", l: "Customer Rating" },
                { v: "10+", l: "Product Categories" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-secondary p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-6">
              <Link to="/about">
                Learn More About Us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={installationImg}
              alt="Professional AC installation service by Patna Aircon"
              loading="lazy"
              width={1024}
              height={768}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Our Products & Services</h2>
            <p className="mt-3 text-muted-foreground">
              A complete range of air conditioning and cooling solutions for every requirement.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/products"
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={`${c.title} dealer in Patna`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{c.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View details <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Why Choose Patna Aircon</h2>
          <p className="mt-3 text-muted-foreground">
            Reliable products, honest guidance and dependable local service.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w) => (
            <Card key={w.title} className="border-border p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <w.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-semibold text-navy">{w.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Featured Products</h2>
              <p className="mt-3 text-muted-foreground">Top picks from our cooling product range.</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Installation service */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-elevated lg:order-1">
            <img
              src={installationImg}
              alt="Split AC installation service in Patna"
              loading="lazy"
              width={1024}
              height={768}
              className="size-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Wrench className="size-3.5" /> Installation Service
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
              Professional AC Installation Service in Patna
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our trained technicians provide complete split AC installation with proper fitting,
              gas charging, testing, and reliable support — so your cooling system runs efficiently
              from day one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={callHref()}>
                  <Phone className="size-4" /> Call Now
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappHref("Hello Patna Aircon, I need AC installation service.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> Book on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="mb-4 flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
          </div>
          <Quote className="mx-auto size-8 text-primary/70" />
          <blockquote className="mt-4 text-lg font-medium text-navy-foreground sm:text-xl">
            “Excellent products and professional service. Patna Aircon gave honest guidance and a
            great quotation. Highly recommended for AC and cooling solutions.”
          </blockquote>
          <div className="mt-5 text-sm text-navy-foreground/70">
            <span className="font-semibold text-navy-foreground">Dr. K.B Jha</span> · Muzaffarpur, Bihar
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Get a Free Quote</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us what you need and we'll respond quickly with product details and the best
              quotation. Prefer to talk now?
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={callHref()} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card hover:border-primary">
                <Phone className="size-5 text-primary" />
                <span><span className="block font-semibold text-navy">Call Now</span>{SITE.phoneDisplay}</span>
              </a>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card hover:border-whatsapp">
                <MessageCircle className="size-5 text-whatsapp" />
                <span><span className="block font-semibold text-navy">WhatsApp Enquiry</span>Quick response on chat</span>
              </a>
            </div>
          </div>
          <Card className="border-border p-6 shadow-card">
            <EnquiryForm />
          </Card>
        </div>
      </section>

      <CtaBanner />
      <MapSection />
    </>
  );
}
