"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, TrendingUp, Users, ArrowRight } from "lucide-react";
import type { Partner } from "@/types";
import { useTranslate } from "@/hooks/use-translate";
import { routes } from "@/lib/routes";

export function AboutHeroSection() {
  const translate = useTranslate();

  return (
    <section className='relative h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/banners/03.jpg'
          alt='Franchise Success'
          fill
          priority
          quality={90}
          className='object-cover'
          sizes='100vw'
        />
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0'></div>

      {/* Content */}
      <div className='relative z-20 container mx-auto px-4 text-center'>
        <div className='mx-auto'>
          {/* Title */}
          <div className='relative mb-6'>
            <h1 className='xl:text-6xl text-3xl font-bold text-white'>
              {translate("aboutFirstTitle")}
            </h1>
          </div>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl max-w-7xl mx-auto mb-10 text-white/80 leading-relaxed'>
            {translate("aboutSecondTitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutOurStory() {
  const milestones = [
    { year: 2005, title: "Founded", description: "Started with a vision to empower entrepreneurs" },
    {
      year: 2010,
      title: "Expansion",
      description: "Reached 100 franchise partners across the country"
    },
    {
      year: 2015,
      title: "Innovation",
      description: "Launched proprietary franchise management software"
    },
    {
      year: 2020,
      title: "Global Reach",
      description: "Expanded operations to 10 countries worldwide"
    },
    {
      year: 2023,
      title: "Industry Leader",
      description: "Recognized as the #1 franchise consulting firm"
    }
  ];

  const translate = useTranslate();

  return (
    <section className='py-20 px-4 md:px-0'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>{translate("aboutOurStory")}</h2>
        <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200'></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className='w-1/2'></div>
              <div className='w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full border-4 border-blue-500 bg-white'></div>
              <div className='w-1/2 p-4 rounded-lg shadow-lg bg-white'>
                <h3 className='text-xl font-bold text-blue-600'>{milestone.year}</h3>
                <h4 className='text-lg font-semibold'>{milestone.title}</h4>
                <p className='text-gray-600'>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutWhyChooseUs() {
  const reasons = [
    {
      icon: <TrendingUp className='w-12 h-12 text-blue-500' />,
      title: "نجاح مثبت",
      description: "تتميز امتيازاتنا بسجل حافل بالربحية والنمو."
    },
    {
      icon: <Users className='w-12 h-12 text-blue-500' />,
      title: "دعم خبراء",
      description: "فريق مخصص لإرشادك في كل خطوة من رحلتك."
    },
    {
      icon: <CheckCircle className='w-12 h-12 text-blue-500' />,
      title: "ضمان الجودة",
      description: "عملية فحص دقيقة لجميع فرص الامتياز."
    }
  ];

  const translate = useTranslate();

  return (
    <section className='py-20 bg-blue-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12'>{translate("whyChooseUs")}</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2'
            >
              <div className='mb-4'>{reason.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{reason.title}</h3>
              <p className='text-gray-600'>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutOurFranchises({ partners }: { partners: Partner[] }) {
  const translate = useTranslate();
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12'>{translate("partners")}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {partners.map((partner, index) => (
            <Image
              key={`partner-${index}`}
              src={partner.image_url}
              alt={partner.name || "Partner Image"}
              width={1000}
              height={1000}
              className='max-w-full h-32 object-contain rounded-md'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCallToAction() {
  const translate = useTranslate();
  return (
    <section className='py-20 bg-blue-600 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-4'>{translate("aboutFooterTitle")}</h2>
        <p className='text-xl mb-8'>{translate("aboutFooterDescription")}</p>
        <Link
          href={"/"}
          className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex gap-4 items-center'
        >
          {translate("contactUs")}
          <ArrowLeft className='w-5 h-5' />
        </Link>
      </div>
    </section>
  );
}
