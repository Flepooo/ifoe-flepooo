"use client";

import { TrendingUpIcon, BarChart2Icon, ArrowUpRight, Globe, Building } from "lucide-react";
import { useLanguage, useTranslate } from "@/hooks/use-translate";

export function GrowthFranchiseSection() {
  const language = useLanguage();
  const translate = useTranslate();

  return (
    <section className='relative w-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden py-16'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl'></div>
        <div className='absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-cyan-100 opacity-40 blur-3xl'></div>
        <div className='absolute -bottom-32 right-1/3 w-80 h-80 rounded-full bg-indigo-100 opacity-40 blur-3xl'></div>

        {/* Grid pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,133,199,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,133,199,0.05)_1px,transparent_1px)] bg-[size:40px_40px]'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Main content */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Left column - English content */}
          <div className='lg:col-span-5 space-y-8'>
            {language === "en" ? (
              <div>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                  Saudi Franchise Market
                  <span className='inline-block ml-2 text-[#0085c7]'>
                    <ArrowUpRight className='w-6 h-6 inline-block' />
                  </span>
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  The franchise market is witnessing significant growth as the Saudi market is the
                  largest franchise market in the Middle East, with a volume of up to $4.5 billion,
                  with an expected compound annual growth of 10 to 15% over the next 3 to 5 years.
                </p>
              </div>
            ) : (
              <div className='lg:col-span-5 space-y-8 text-right'>
                <div>
                  <h2 className='text-3xl font-bold text-gray-800 mb-4 font-arabic'>
                    <span className='inline-block mr-2 text-[#0085c7]'>
                      <ArrowUpRight className='w-6 h-6 inline-block' />
                    </span>
                    سوق الامتياز السعودي
                  </h2>
                  <p className='text-gray-600 leading-relaxed font-arabic'>
                    يشهد سوق الامتياز التجاري نموا كبيرا حيث يعتبر السوق السعودية أكبر سوق امتياز في
                    الشرق الأوسط، بحجم يصل إلى 4.5 مليار دولار، مع توقع نمو سنوي مركب من 10 إلى 15%
                    على مدى 3 إلى 5 أعوام مقبلة.
                  </p>
                </div>
              </div>
            )}

            {/* Stats cards */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm text-gray-500'>{translate("marketValue")}</span>
                  <span className='bg-blue-100 text-[#0085c7] p-1 rounded-md'>
                    <TrendingUpIcon className='w-4 h-4' />
                  </span>
                </div>
                <div className='text-2xl font-bold text-gray-800'>$4.5B</div>
                <div className='text-xs text-[#0085c7] mt-1'>
                  {translate("largestInMiddleEast")}
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm text-gray-500'>{translate("growthRate")}</span>
                  <span className='bg-green-100 text-green-600 p-1 rounded-md'>
                    <BarChart2Icon className='w-4 h-4' />
                  </span>
                </div>
                <div className='text-2xl font-bold text-gray-800'>10-15%</div>
                <div className='text-xs text-green-600 mt-1'>
                  {translate("annualCompoundGrowth")}
                </div>
              </div>
            </div>
          </div>

          {/* Center column - 3D visualization */}
          <div className='lg:col-span-2 flex justify-center'>
            <div className='relative h-full flex items-center'>
              <div className='h-full w-px bg-gradient-to-b from-transparent via-[#0085c7]/30 to-transparent'></div>

              {/* Animated circles */}
              <div
                className='absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0085c7] rounded-full animate-ping opacity-75'
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className='absolute top-2/4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0085c7] rounded-full animate-ping opacity-75'
                style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
              ></div>
              <div
                className='absolute top-3/4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#0085c7] rounded-full animate-ping opacity-75'
                style={{ animationDuration: "2s", animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Right column - Arabic content */}
        </div>
      </div>
    </section>
  );
}
