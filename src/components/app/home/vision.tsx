"use client";

import Image from "next/image";

import { useTranslate } from "@/hooks/use-translate";

export default function Vision2030Section() {
  const translate = useTranslate();

  return (
    <div className='bg-white py-12 px-4 md:px-8 lg:px-12 container mx-auto'>
      {/* Main content */}
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        {/* Right side - Text content */}
        <div className='w-full lg:w-1/2 space-y-6'>
          <div className='text-right'>
            <p className='text-lg font-arabic mb-2'>{translate("vision01")}</p>
          </div>

          <div className='text-right'>
            <p className='text-lg font-arabic mb-2'>{translate("vision02")} </p>
          </div>

          <div className='text-right'>
            <p className='text-lg font-arabic mb-2'>{translate("vision03")}</p>
          </div>
        </div>

        {/* Left side - Circular diagram */}
        <div className='relative w-full lg:w-1/2 flex justify-center'>
          <Image src='/banners/33.jpg' alt='Vision 2030' width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
