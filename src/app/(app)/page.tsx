import { type Metadata } from "next"
import { getPartners } from "@/actions/partners"

import { HomeBanner } from "@/components/app/home/banner"
import { ContactForm } from "@/components/app/contact/form"
import { HomeSocialDetails } from "@/components/app/home/social-details"
import { HomeFranchisesList } from "@/components/app/home/franchises"
import { HomePartnersList } from "@/components/app/home/partners"

import { ConferenceSection } from "@/components/app/home/why-you-should-attend"
import { SaudiMarketInfographic } from "@/components/app/home/info-graphic"
import { HomeTextDisplay } from "@/components/app/home/text-display"
import Vision2030 from "@/components/app/home/vision"
import { GrowthFranchiseSection } from "@/components/app/home/growth"
import { HomeStatsSection } from "@/components/app/home/home-stats-section"

export const metadata: Metadata = {
  title: "الرئيسية",
  description: "الرئيسية"
}

export const dynamic = "force-dynamic"

export default async function Home() {
  const partners = await getPartners()

  return (
    <main>
      <HomeBanner />
      <ConferenceSection />
      {/* <HomeFranchisesList franchises={franchises?.data} /> */}
      <SaudiMarketInfographic />
      <HomeStatsSection />
      <HomeTextDisplay />
      <Vision2030 />
      <GrowthFranchiseSection />
      <HomePartnersList partners={partners} />
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
        <HomeSocialDetails />
        <ContactForm />
      </div>
    </main>
  )
}
