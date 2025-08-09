import { Metadata } from "next";
import { getPartners } from "@/actions/partners";
import { AboutHeroSection } from "@/components/app/about/sections";
import { FranchiseExhibition } from "@/components/app/about/franchise-details";
import { AboutDetails } from "@/components/app/about/details";
import { MainAboutChooseUs } from "@/components/app/about/why-choose-us";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "عن IFOE",
  description: "معلومات عن شركتنا وتاريخها والخدمات التي نقدمها.",
  keywords: [
    "امتياز، فرنشايز، ريادة الأعمال",
    "franchise, franchising, entrepreneurship",
    "شركة، استشارات، استثمار",
    "company, consulting, investment"
  ]
};

export default async function AboutPage() {
  const partners = await getPartners();

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <AboutHeroSection />
      {/* <FranchiseExhibition /> */}
      <MainAboutChooseUs />
      <AboutDetails />
    </div>
  );
}
