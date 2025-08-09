"use client";

import { useLanguage, useTranslate } from "@/hooks/use-translate";
import { motion } from "framer-motion";
import { Globe, MapPin, Calendar, Users } from "lucide-react";

export function AboutDetails() {
  const translate = useTranslate();
  const language = useLanguage();

  return (
    <section className='py-16 md:py-24 overflow-hidden bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>{translate("aboutIfoe")}</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6'></div>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              {translate("internationalFranchiseOpportunitiesExhibition")}
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 gap-12 items-center'>
          {language == "en" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <div className='absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full opacity-70 blur-3xl'></div>

              <div className='relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
                <div className='flex gap-2 items-center mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center gap-2 justify-center text-white mr-4'>
                    <Globe className='w-6 h-6' />
                  </div>
                  <h3 className='text-xl font-bold'>International Exhibition</h3>
                </div>

                <p className='text-gray-700 leading-relaxed mb-6'>
                  The International Franchise Opportunities Exhibition in its Third edition
                  considered one of the largest international franchise exhibitions in the Kingdom
                  of Saudi Arabia. It is organized by Event Maker for the establishment and
                  organization of exhibitions. It is a unique opportunity to get to know new brands
                  and obtain new franchise partners.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-blue-50 rounded-full flex items-center gap-2 justify-center text-blue-600 mr-3'>
                      <MapPin className='w-5 h-5' />
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>Location</div>
                      <div className='font-medium'>Jeddah</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-blue-50 rounded-full flex items-center gap-2 justify-center text-blue-600 mr-3'>
                      <Calendar className='w-5 h-5' />
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>Edition</div>
                      <div className='font-medium'>3rd Edition</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-blue-50 rounded-full flex items-center gap-2 justify-center text-blue-600 mr-3'>
                      <Users className='w-5 h-5' />
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>Participants</div>
                      <div className='font-medium'>International</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {language == "ar" && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative'
            >
              <div className='absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-50 rounded-full opacity-70 blur-3xl'></div>

              <div className='relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 rtl'>
                <div className='flex gap-2 items-center mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center gap-2 justify-center text-white ml-4'>
                    <Globe className='w-6 h-6' />
                  </div>
                  <h3 className='text-xl font-bold'>معرض دولي</h3>
                </div>

                <p className='text-gray-700 leading-relaxed mb-6'>
                  يعتبر معرض فرص الامتياز التجاري الدولي في نسخته الثالثه واحد من أكبر معارض
                  الامتياز الدولي في المملكة العربية السعودية. تنظّيم شركة ايفنت ميكر و تنظيم
                  المعارض، إنّه فرصة فريدة للتعرف على علامات تجارية جديدة و الحصول على شركاء امتياز
                  جدد.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-cyan-50 rounded-full flex items-center gap-2 justify-center text-cyan-600 ml-3'>
                      <MapPin className='w-5 h-5' />
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>الموقع</div>
                      <div className='font-medium'>جدة</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-cyan-50 rounded-full flex items-center gap-2 justify-center text-cyan-600 ml-3'>
                      <Calendar className='w-5 h-5' />
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>النسخة</div>
                      <div className='font-medium'>النسخة الثالثة</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-cyan-50 rounded-full flex items-center gap-2 justify-center text-cyan-600 ml-3'>
                      <Users className='w-5 h-5' />
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>المشاركون</div>
                      <div className='font-medium'>دوليون</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
