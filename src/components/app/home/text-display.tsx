"use client";

import { LinkBtn } from "@/components/ui/link-btn";
import { useTranslate } from "@/hooks/use-translate";
import Image from "next/image";

export function HomeTextDisplay() {
  const translate = useTranslate();
  return (
    <section className='relative py-16 bg-gray-100'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6'>
        <div className='space-y-6'>
          <h2 className='text-4xl font-bold text-gray-900'>
            {translate("internationalFranchiseOpportunitiesExhibition")}
          </h2>
          <p className='text-gray-700 text-lg leading-relaxed'>{translate("homeDisplayText")}</p>
        </div>
        <div className='relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg'>
          <Image
            src='/banners/04.jpg'
            alt='Franchise Expo'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      </div>
    </section>
  );
}
