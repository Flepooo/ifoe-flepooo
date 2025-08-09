"use client";

import { Button } from "@/components/ui/button";
import { LinkBtn } from "@/components/ui/link-btn";
import { useLanguage, useTranslate } from "@/hooks/use-translate";
import { WHATSAPP_URL } from "@/lib/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const ServicesCTA = () => {
  const translate = useTranslate();
  const language = useLanguage();
  const isRtl = language === "ar";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='relative container mx-auto overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-lg p-12 text-white mb-12'
    >
      {/* Decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-1/2 translate-y-1/2'></div>
      </div>

      <div className='relative z-10 max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>{translate("servicesFooterTitle")}</h2>
        <p className='text-xl opacity-90 mb-8'>{translate("servicesFooterDescription")}</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='inline-block'
        >
          <a href={WHATSAPP_URL} target='_blank'>
            <Button
              variant='secondary'
              size='lg'
              className='bg-white text-blue-700 hover:bg-blue-50 shadow-lg flex gap-3 items-center justify-center'
            >
              {translate("registerNow")}
              {isRtl ? <ArrowLeft className='h-5 w-5' /> : <ArrowRight className='h-5 w-5' />}
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
