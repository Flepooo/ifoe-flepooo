import ServicesShowcase from "@/components/app/services/services-list";

import { ServicesCTA } from "@/components/app/services/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "الخدمات"
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesShowcase />
      <ServicesCTA />
    </div>
  );
}
