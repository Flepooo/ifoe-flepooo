"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Monitor,
  Users,
  Wallet,
  GraduationCap,
  Coffee,
  Trash2,
  Baby,
  Cake,
  Car,
  Truck,
  Gift,
  Cpu,
  Heart,
  Building,
  Home,
  ClubIcon as Football,
  Plane,
  HomeIcon as House,
  Film,
  Search,
  X,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useLanguage, useTranslate } from "@/hooks/use-translate";
import { arServices, enServices } from "./data";

export default function ServicesShowcase() {
  const translate = useTranslate();
  const language = useLanguage();

  const services = language == "ar" ? arServices : enServices;

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header
        className='relative bg-cover bg-center'
        style={{ backgroundImage: 'url("/banners/03.jpg")' }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='container mx-auto px-4 py-16 md:py-20 text-white relative z-10'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-4'>
            {translate("specificService")}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-12'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl font-bold'>{translate("specificService")}</h2>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface ServiceCardProps {
  service: any;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
        "border border-gray-100 h-full flex flex-col cursor-pointer"
      )}
    >
      <div className='p-6 flex flex-col items-center text-center h-full'>
        <div className={cn("w-16 h-16 p-3 rounded-xl mb-4", service.color)}>{service.icon}</div>

        <p className='text-sm text-gray-500 rtl'>{service.name}</p>
      </div>
    </motion.div>
  );
}
