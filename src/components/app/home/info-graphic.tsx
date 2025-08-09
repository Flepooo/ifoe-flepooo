"use client";

import { useLanguage } from "@/hooks/use-translate";
import { Building2, Star, Store } from "lucide-react";
import Image from "next/image";

export function SaudiMarketInfographic() {
  const language = useLanguage();
  const img = language === "ar" ? "/banners/11.jpg" : "/banners/22.jpg";
  return (
    <div>
      <Image
        src={img}
        width={1200}
        height={800}
        alt='Saudi Market Infographic'
        className='mx-auto'
      />
    </div>
  );
}
export function SaudiMarketInfographic2() {
  return (
    <div className='max-w-6xl mx-auto p-4 sm:p-6 bg-white'>
      {/* Header */}
      <div className='flex justify-between items-center mb-8 sm:mb-16'>
        <div className='text-blue-600 font-semibold text-xs sm:text-sm'>
          <p>معرض فرص الامتياز التجاري الدولي</p>
        </div>
        <div className='text-gray-400 font-semibold text-lg sm:text-xl'>Saudi Market</div>
      </div>

      {/* Circles and Lines Container */}
      <div className='relative flex justify-center mb-8 sm:mb-16'>
        <div className='flex items-center justify-center w-full max-w-4xl'>
          {/* Connecting Lines - Positioned behind circles */}
          <div className='absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-center w-full'>
            {/* Left to Middle Line */}
            <div className='h-0.5 w-[calc(33%-20px)] bg-gradient-to-r from-blue-500 to-gray-200 relative'>
              <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-blue-500 bg-white'></div>
            </div>

            {/* Spacer for Middle Circle */}
            <div className='w-10 sm:w-20 md:w-40'></div>

            {/* Middle to Right Line */}
            <div className='h-0.5 w-[calc(33%-20px)] bg-gradient-to-r from-gray-200 to-cyan-500 relative'>
              <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-cyan-500 bg-white'></div>
            </div>
          </div>

          {/* Circles Container - Positioned above lines */}
          <div className='flex justify-between w-full z-10'>
            {/* Left Circle */}
            <div className='w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full border-2 sm:border-4 border-blue-500 flex items-center justify-center'>
              <div className='w-16 h-16 sm:w-22 sm:h-22 md:w-32 md:h-32 rounded-full bg-blue-600 flex items-center justify-center'>
                <Store className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white' />
              </div>
            </div>

            {/* Middle Circle */}
            <div className='w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full border-2 sm:border-4 border-gray-200 flex items-center justify-center'>
              <div className='w-16 h-16 sm:w-22 sm:h-22 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center'>
                <Star className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white' />
              </div>
            </div>

            {/* Right Circle */}
            <div className='w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full border-2 sm:border-4 border-cyan-500 flex items-center justify-center'>
              <div className='w-16 h-16 sm:w-22 sm:h-22 md:w-32 md:h-32 rounded-full bg-cyan-500 flex items-center justify-center'>
                <Building2 className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content - Separated from circles */}
      <div className='flex flex-col md:flex-row justify-between px-2 md:px-4 space-y-6 md:space-y-0'>
        {/* Left Text */}
        <div className='flex-1 text-center max-w-xs mx-auto md:mx-0'>
          <p className='text-right font-bold text-base sm:text-lg'>
            وأكثر من ٦٥٠٠ منفذ بيع في مختلف القطاعات
          </p>
          <p className='text-gray-700 text-sm sm:text-base'>
            And more than 6,500 outlets in various sectors
          </p>
        </div>

        {/* Middle Text */}
        <div className='flex-1 text-center max-w-xs mx-auto md:mx-0'>
          <p className='font-bold text-base sm:text-lg text-center'>1788 امتيازا</p>
          <p className='text-gray-700 text-sm sm:text-base direction-reverse'>1788 Franchises</p>
        </div>

        {/* Right Text */}
        <div className='flex-1 text-center max-w-xs mx-auto md:mx-0'>
          <p className='text-right font-bold text-base sm:text-lg'>
            يصل عدد الامتيازات في السوق السعودي إلى:
          </p>
          <p className='text-gray-700 text-sm sm:text-base'>
            The number of franchises in the Saudi market is up to:
          </p>
        </div>
      </div>
    </div>
  );
}
