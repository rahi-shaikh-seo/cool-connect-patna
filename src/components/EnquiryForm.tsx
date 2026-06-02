import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Please enter a valid mobile number"),
  product: z.string().trim().min(2, "Please mention the product / service").max(120),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function EnquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
      product: (form.elements.namedItem("product") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const text = `New Enquiry — Patna Aircon%0A%0AName: ${encodeURIComponent(
      result.data.name,
    )}%0AMobile: ${encodeURIComponent(result.data.mobile)}%0AProduct/Service: ${encodeURIComponent(
      result.data.product,
    )}%0AMessage: ${encodeURIComponent(result.data.message || "-")}`;

    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${text}`, "_blank");
    toast.success("Thank you! Your enquiry is ready to send on WhatsApp.");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input id="mobile" name="mobile" inputMode="tel" placeholder="Your mobile number" />
          {errors.mobile && <p className="text-xs text-destructive">{errors.mobile}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="product">Product / Service Required</Label>
        <Input id="product" name="product" placeholder="e.g. Cassette AC, VRF, AC Installation" />
        {errors.product && <p className="text-xs text-destructive">{errors.product}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Tell us about your requirement" />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
        <Send className="size-4" /> Submit Enquiry
      </Button>
    </form>
  );
}
