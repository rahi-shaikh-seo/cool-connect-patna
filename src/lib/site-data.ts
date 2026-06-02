import chiller from "@/assets/chiller.jpg";
import ductAc from "@/assets/duct-ac.jpg";
import splitAc from "@/assets/split-ac.jpg";
import cassetteAc from "@/assets/cassette-ac.jpg";
import vrf from "@/assets/vrf.jpg";
import floorStanding from "@/assets/floor-standing.jpg";
import coldRoom from "@/assets/cold-room.jpg";
import installation from "@/assets/installation.jpg";

// NOTE: Phone / WhatsApp / email below are placeholders — replace with the
// real Patna Aircon details when available.
export const SITE = {
  name: "Patna Aircon",
  tagline: "Authorized AC Dealer & Cooling Solution Provider in Patna",
  established: "2020",
  experience: "5 Years",
  rating: "5.0",
  gst: "10**********1ZP",
  phoneDisplay: "+91 90000 00000",
  phoneDial: "+919000000000",
  whatsappNumber: "919000000000",
  email: "info@patnaaircon.com",
  address: "Near Tamtam Parao, Phulwari Sharif, Patna, Bihar",
  mapEmbed:
    "https://www.google.com/maps?q=Phulwari+Sharif+Patna+Bihar&output=embed",
  mapsLink: "https://www.google.com/maps?q=Phulwari+Sharif+Patna+Bihar",
} as const;

export function callHref() {
  return `tel:${SITE.phoneDial}`;
}

export function whatsappHref(message?: string) {
  const text = message ?? "Hello Patna Aircon, I would like to enquire about your AC products and services.";
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "air-cooled-chillers",
    title: "Air Cooled Chillers",
    description:
      "High-performance air cooled chillers suitable for commercial and industrial cooling applications.",
    image: chiller,
    products: [
      { name: "Carrier Aqua Force 30XV Air Cooled Screw Chiller", description: "High-efficiency air cooled screw chiller for large commercial and industrial loads.", image: chiller, category: "Air Cooled Chillers", featured: true },
      { name: "Carrier Aqua Force 30XA Air Cooled Screw Chiller", description: "Robust screw chiller engineered for reliable continuous cooling performance.", image: chiller, category: "Air Cooled Chillers" },
      { name: "Carrier Aqua Force 30XBE Air Cooled Chiller", description: "Energy-efficient air cooled chiller for demanding industrial environments.", image: chiller, category: "Air Cooled Chillers" },
    ],
  },
  {
    slug: "duct-ac",
    title: "Duct AC",
    description:
      "Efficient ductable air conditioning solution for offices, showrooms, halls, restaurants, and commercial spaces.",
    image: ductAc,
    products: [
      { name: "Carrier Ductable R410A AC", description: "Efficient ductable AC for offices, showrooms, halls, restaurants, and commercial spaces.", image: ductAc, category: "Duct AC", featured: true },
    ],
  },
  {
    slug: "split-ac",
    title: "Split Air Conditioner",
    description:
      "Reliable split air conditioner for homes, offices, cabins, and small commercial spaces.",
    image: splitAc,
    products: [
      { name: "Toshiba RAS-B18UFV-E Split AC", description: "Reliable split air conditioner for homes, offices, cabins, and small commercial spaces.", image: splitAc, category: "Split Air Conditioner" },
    ],
  },
  {
    slug: "cassette-ac",
    title: "Cassette Air Conditioner",
    description:
      "Premium cassette AC solution for modern offices, showrooms, hotels, and commercial interiors.",
    image: cassetteAc,
    products: [
      { name: "Toshiba Cassette RAV1001UP RAV AC", description: "Premium cassette AC for modern offices, showrooms, hotels, and commercial interiors.", image: cassetteAc, category: "Cassette Air Conditioner", featured: true },
    ],
  },
  {
    slug: "vrf-ac",
    title: "VRF Air Conditioning",
    description:
      "Advanced VRF air conditioning system for energy-efficient and flexible cooling in large spaces.",
    image: vrf,
    products: [
      { name: "Carrier X Power Mini VRF", description: "Advanced VRF system for energy-efficient and flexible cooling in large spaces.", image: vrf, category: "VRF Air Conditioning", featured: true },
    ],
  },
  {
    slug: "floor-standing-ac",
    title: "Floor Standing Air Conditioner",
    description:
      "Powerful floor standing AC suitable for large rooms, halls, offices, and commercial areas.",
    image: floorStanding,
    products: [
      { name: "Toshiba B13J2FVG-E/RAS Floor Stand AC", description: "Powerful floor standing AC for large rooms, halls, offices, and commercial areas.", image: floorStanding, category: "Floor Standing Air Conditioner" },
    ],
  },
  {
    slug: "carrier-cassette-ac",
    title: "Carrier Cassette Air Conditioner",
    description:
      "Carrier cassette air conditioner for high-performance cooling with an elegant ceiling-mounted design.",
    image: cassetteAc,
    products: [
      { name: "Carrier 42QTD018D8S-1 Cassette Air Conditioner", description: "High-performance cassette AC with an elegant ceiling-mounted design.", image: cassetteAc, category: "Carrier Cassette Air Conditioner" },
    ],
  },
  {
    slug: "ac-installation",
    title: "AC Installation Service",
    description:
      "Professional AC installation service in Patna with proper fitting, testing, and support.",
    image: installation,
    products: [
      { name: "Split AC Installation Service", description: "Professional AC installation in Patna with proper fitting, testing, and after-sales support.", image: installation, category: "AC Installation Service" },
    ],
  },
  {
    slug: "cold-room-unit",
    title: "Cold Room Condensing Unit",
    description:
      "Reliable cold room outdoor unit for refrigeration, storage, and commercial cooling needs.",
    image: coldRoom,
    products: [
      { name: "Carrier MT Cold Room Outdoor Unit", description: "Reliable cold room outdoor unit for refrigeration, storage, and commercial cooling needs.", image: coldRoom, category: "Cold Room Condensing Unit", featured: true },
    ],
  },
];

export const ALL_PRODUCTS: Product[] = CATEGORIES.flatMap((c) => c.products);
export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => p.featured);

export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: chiller, alt: "Air cooled chiller unit installed for commercial cooling in Patna" },
  { src: vrf, alt: "VRF air conditioning outdoor units for a commercial project" },
  { src: cassetteAc, alt: "Ceiling cassette AC installation in an office" },
  { src: ductAc, alt: "Ductable AC system with sheet metal ducting" },
  { src: splitAc, alt: "Wall mounted split AC installation" },
  { src: floorStanding, alt: "Floor standing AC for a large hall" },
  { src: coldRoom, alt: "Cold room condensing outdoor unit" },
  { src: installation, alt: "Technician performing professional AC installation in Patna" },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products & Services" },
  { to: "/about", label: "About Us" },
  { to: "/photos", label: "Photos" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact Us" },
] as const;
