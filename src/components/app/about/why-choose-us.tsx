"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  Users,
  BarChart3,
  Calendar,
  Globe,
  Award,
  Lightbulb,
  Handshake
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage, useTranslate } from "@/hooks/use-translate";
import { LinkBtn } from "@/components/ui/link-btn";
import { WHATSAPP_URL } from "@/lib/constants";

export function MainAboutChooseUs() {
  const [activeTab, setActiveTab] = useState("all");
  const translate = useTranslate();
  const language = useLanguage();

  return (
    <section className='py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Floating Elements */}
        <div className='absolute left-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70'></div>
        <div className='absolute right-0 bottom-1/4 w-64 h-64 bg-cyan-50 rounded-full mix-blend-multiply blur-3xl opacity-70'></div>

        {/* Section Header */}
        <div className='relative'>
          <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4'>
                {translate("whyChooseUs")}
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-3'>
                {translate("whyChooseUsTitle")}
              </h2>
              <div className='w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full'></div>
            </div>
          </div>
        </div>

        <Tabs defaultValue='all' value={activeTab} onValueChange={setActiveTab} className='mb-12'>
          <TabsList className='grid grid-cols-3 w-full md:w-auto mb-8'>
            <TabsTrigger value='all'>{translate("allBenefits")}</TabsTrigger>
            <TabsTrigger value='exhibitors'>{translate("forExhibitors")}</TabsTrigger>
            <TabsTrigger value='visitors'>{translate("forVisitors")}</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <div className='grid grid-cols-1 gap-16'>
              {language === "en" && (
                <div>
                  <div className='prose max-w-none mb-8'>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      Whether you are thinking about buying a franchise or are already in the
                      industry as a franchisee, franchisor or other franchise professional, visiting
                      iFOE-KSA can provide information as well as inspiration.
                    </p>
                  </div>

                  <div className='grid gap-6'>
                    <FeatureCard
                      icon={<Store />}
                      number='01'
                      title='Largest Franchise Fair'
                      description='iFOE-KSA is one of the largest franchise fair in Saudi, a real fair in Jeddah. Take advantage of the opportunity to experience over 150 brands in one hall.'
                      color='blue'
                      delay={0}
                    />

                    <FeatureCard
                      icon={<Globe />}
                      number='02'
                      title='International Exposure'
                      description='Connect with franchise brands from around the world and explore global business opportunities all under one roof.'
                      color='cyan'
                      delay={0.1}
                    />

                    <FeatureCard
                      icon={<Lightbulb />}
                      number='03'
                      title='Professional Guidance'
                      description='Get expert advice and insights from industry professionals to help you make informed decisions about your franchise journey.'
                      color='blue'
                      delay={0.2}
                    />
                  </div>
                </div>
              )}
              {language === "ar" && (
                <div className='rtl'>
                  <div className='prose max-w-none mb-8'>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      سواء كنت تفكر في شراء امتياز أو كنت تعمل بالفعل في هذا المجال بصفتك صاحب
                      امتياز أو غيره من المتخصصين في الامتياز التجاري، فإن زيارة معرض فرص الامتياز
                      التجاري الدولي يمكن أن يوفر لك معلومات مفيدة للنجاح في هذا المجال.
                    </p>
                  </div>

                  <div className='grid gap-6'>
                    <FeatureCard
                      icon={<Award />}
                      number='٠١'
                      title='فرصة لتكوين علاقات تجارية'
                      description='يعتبر معرض فرص الامتياز التجاري الدولي فرصة لتكوين علاقات تجارية وتعزيز علامتك التجارية ومنصة لمقابلة أهم العلامات التجارية في عالم الامتياز.'
                      color='cyan'
                      delay={0.3}
                      isRtl={true}
                    />

                    <FeatureCard
                      icon={<BarChart3 />}
                      number='٠٢'
                      title='زيادة فرص النمو'
                      description='فرص الامتياز التجاري الدولي يوفر لك فرصة لتعزيز نمو علامتك التجارية وضع مكانة لنفسك.'
                      color='blue'
                      delay={0.4}
                      isRtl={true}
                    />

                    <FeatureCard
                      icon={<Handshake />}
                      number='٠٣'
                      title='تجربة مهنية فريدة'
                      description='معرض فرص الامتياز التجاري الدولي هو أحد أكبر المعارض للامتياز التجاري في السعودية في مدينة جدة. كذلك استغل فرصة لتجربة أكثر من ١٥٠ علامة تجارية.'
                      color='cyan'
                      delay={0.5}
                      isRtl={true}
                    />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value='exhibitors'>
            <div className='grid grid-cols-1 gap-16'>
              {/* Left Side - English */}
              {language === "en" && (
                <div>
                  <div className='prose max-w-none mb-8'>
                    <h3 className='text-2xl font-bold mb-4'>For Exhibitors</h3>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      IFOE-KAS Provides an opportunity to generate leads, make your brand visible
                      and take a visible place in the franchise world and beyond!
                    </p>
                  </div>

                  <div className='grid gap-6'>
                    <FeatureCard
                      icon={<BarChart3 />}
                      number='01'
                      title='Lead Generation'
                      description='Connect with potential franchisees and partners to expand your business network and generate quality leads.'
                      color='blue'
                      delay={0}
                    />

                    <FeatureCard
                      icon={<Globe />}
                      number='02'
                      title='Brand Visibility'
                      description='Showcase your brand to a targeted audience of franchise professionals and interested investors.'
                      color='cyan'
                      delay={0.1}
                    />

                    <FeatureCard
                      icon={<Handshake />}
                      number='03'
                      title='Market Expansion'
                      description='Explore new markets and territories for your franchise business with direct access to the Saudi market.'
                      color='blue'
                      delay={0.2}
                    />
                  </div>
                </div>
              )}
              {/* Right Side - Arabic */}
              {language === "ar" && (
                <div className='rtl'>
                  <div className='prose max-w-none mb-8'>
                    <h3 className='text-2xl font-bold mb-4'>للعارضين</h3>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      يوفر معرض فرص الامتياز التجاري الدولي فرصة لتوليد العملاء المحتملين وجعل
                      علامتك التجارية مرئية واتخاذ مكانة واضحة في عالم الامتياز وما بعده!
                    </p>
                  </div>

                  <div className='grid gap-6'>
                    <FeatureCard
                      icon={<Users />}
                      number='٠١'
                      title='توليد العملاء المحتملين'
                      description='تواصل مع أصحاب الامتياز والشركاء المحتملين لتوسيع شبكة أعمالك وتوليد عملاء محتملين ذوي جودة عالية.'
                      color='cyan'
                      delay={0.3}
                      isRtl={true}
                    />

                    <FeatureCard
                      icon={<Award />}
                      number='٠٢'
                      title='رؤية العلامة التجارية'
                      description='اعرض علامتك التجارية لجمهور مستهدف من محترفي الامتياز والمستثمرين المهتمين.'
                      color='blue'
                      delay={0.4}
                      isRtl={true}
                    />

                    <FeatureCard
                      icon={<Globe />}
                      number='٠٣'
                      title='توسيع السوق'
                      description='استكشف أسواقًا ومناطق جديدة لعملك التجاري مع إمكانية الوصول المباشر إلى السوق السعودي.'
                      color='cyan'
                      delay={0.5}
                      isRtl={true}
                    />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value='visitors'>
            <div className='grid grid-cols-1 gap-16'>
              {/* Left Side - English */}
              {language === "en" && (
                <div>
                  <div className='prose max-w-none mb-8'>
                    <h3 className='text-2xl font-bold mb-4'>For Visitors</h3>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      Take advantage of the opportunity to experience over 150 brands in one hall
                      over three days and open a new, professional chapter through your visit to the
                      fair.
                    </p>
                  </div>

                  <div className='grid gap-6'>
                    <FeatureCard
                      icon={<Store />}
                      number='01'
                      title='Explore Opportunities'
                      description='Discover a wide range of franchise opportunities across various industries all in one location.'
                      color='blue'
                      delay={0}
                    />

                    <FeatureCard
                      icon={<Calendar />}
                      number='02'
                      title='Three-Day Experience'
                      description='Take your time exploring over three full days, allowing you to thoroughly research and compare different franchise options.'
                      color='cyan'
                      delay={0.1}
                    />

                    <FeatureCard
                      icon={<Lightbulb />}
                      number='03'
                      title='Professional Development'
                      description='Gain valuable insights and knowledge about the franchise industry from experts and successful franchisors.'
                      color='blue'
                      delay={0.2}
                    />
                  </div>
                </div>
              )}
              {/* Right Side - Arabic */}
              {language === "ar" && (
                <div className='rtl'>
                  <div className='prose max-w-none mb-8'>
                    <h3 className='text-2xl font-bold mb-4'>للزوار</h3>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      استفد من فرصة تجربة أكثر من 150 علامة تجارية في قاعة واحدة على مدار ثلاثة أيام
                      وافتح فصلاً جديدًا واحترافيًا من خلال زيارتك للمعرض.
                    </p>
                  </div>

                  <div className='grid gap-6'>
                    <FeatureCard
                      icon={<Store />}
                      number='٠١'
                      title='استكشاف الفرص'
                      description='اكتشف مجموعة واسعة من فرص الامتياز عبر مختلف الصناعات في مكان واحد.'
                      color='cyan'
                      delay={0.3}
                      isRtl={true}
                    />

                    <FeatureCard
                      icon={<Calendar />}
                      number='٠٢'
                      title='تجربة لمدة ثلاثة أيام'
                      description='خذ وقتك في الاستكشاف على مدار ثلاثة أيام كاملة، مما يتيح لك البحث بدقة ومقارنة خيارات الامتياز المختلفة.'
                      color='blue'
                      delay={0.4}
                      isRtl={true}
                    />

                    <FeatureCard
                      icon={<Lightbulb />}
                      number='٠٣'
                      title='التطوير المهني'
                      description='اكتسب رؤى ومعرفة قيمة حول صناعة الامتياز من الخبراء وأصحاب الامتياز الناجحين.'
                      color='cyan'
                      delay={0.5}
                      isRtl={true}
                    />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className='mt-20 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold mb-6'>{translate("readyForEx")}</h3>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href={WHATSAPP_URL} target='_blank'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                >
                  {translate("register")}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  color: "blue" | "cyan";
  delay: number;
  isRtl?: boolean;
}

function FeatureCard({
  icon,
  number,
  title,
  description,
  color,
  delay,
  isRtl = false
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100",
        "flex gap-5"
      )}
    >
      <div
        className={cn(
          "shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
          color === "blue" ? "bg-blue-100 text-blue-600" : "bg-cyan-100 text-cyan-600"
        )}
      >
        {icon}
      </div>

      <div className={cn("flex-grow", isRtl ? "text-right" : "text-left")}>
        <div
          className={cn(
            "text-sm font-bold mb-2",
            color === "blue" ? "text-blue-600" : "text-cyan-600"
          )}
        >
          {number}
        </div>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
}
