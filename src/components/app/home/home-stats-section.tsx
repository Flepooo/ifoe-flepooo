"use client";

import type React from "react";

import { Trophy, Users, Globe, Handshake, Building } from "lucide-react";
import { useTranslate } from "@/hooks/use-translate";

// Assuming this is defined elsewhere in your app
type StatItemProps = {
  value: string | number;
  label: string;
  icon: React.ReactNode;
};

const StatItem = ({ value, label, icon }: StatItemProps) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300'>
      <div className='p-3 rounded-full bg-gray-100 text-blue-600 w-fit'>{icon}</div>
      <div>
        <div className='text-3xl md:text-4xl font-bold '>{value}</div>
        <div className='text-sm md:text-base font-medium text-gray-600 mt-1'>{label}</div>
      </div>
    </div>
  );
};

export function HomeStatsSection() {
  const translate = useTranslate();

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 rtl'>
            {translate("exhibitionStatisticsTitle")}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
          <StatItem value='115' label={translate("stats01I")} icon={<Building size={24} />} />
          <StatItem value='8000m²' label={translate("stats02T")} icon={<Trophy size={24} />} />
          <StatItem value='12' label={translate("stats03T")} icon={<Globe size={24} />} />
          <StatItem value='+230' label={translate("stats04T")} icon={<Handshake size={24} />} />
          <StatItem value='9673' label={translate("stats05T")} icon={<Users size={24} />} />
        </div>
      </div>
    </section>
  );
}
