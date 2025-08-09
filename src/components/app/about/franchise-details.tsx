"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Briefcase, Megaphone, ChevronRight, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslate } from "@/hooks/use-translate";
import { LinkBtn } from "@/components/ui/link-btn";

export function FranchiseExhibition() {
  const controls = useAnimation();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  const translate = useTranslate();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20'>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <Badge className='bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 text-sm rounded-full mb-4 uppercase tracking-wider'>
                {translate("international_franchise_exhibition")}
              </Badge>

              <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                <span className='block'>{translate("welcome_to")}</span>
                <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
                  {translate("international_franchise")}
                </span>
                <span className='block'>{translate("opportunities_exhibition")}</span>
              </h1>

              <motion.p className='text-lg text-slate-300 leading-relaxed'>
                {translate("exhibition_description")}
              </motion.p>

              <motion.div className='flex flex-wrap gap-4'>
                <LinkBtn
                  href='/register'
                  className='bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full'
                >
                  {translate("register_now")}
                  <ChevronRight className='ml-2 h-4 w-4' />
                </LinkBtn>

                <Button
                  variant='outline'
                  className='border-white/20 bg-white/10 text-white rounded-full'
                >
                  <Calendar className='mr-2 h-4 w-4' /> {translate("view_schedule")}
                </Button>
              </motion.div>

              <div className='flex items-center gap-2 text-slate-300'>
                <MapPin className='h-5 w-5 text-pink-500' />
                <span>{translate("location")}</span>
                <span className='mx-2'>•</span>
                <Calendar className='h-5 w-5 text-pink-500' />
                <span>{translate("date")}</span>
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <motion.div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/banners/04.jpg'
                alt='Franchise Exhibition'
                width={600}
                height={400}
                className='w-full h-auto object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                <Badge className='bg-pink-600 text-white mb-2'>{translate("live_event")}</Badge>
                <h3 className='text-xl font-bold'>{translate("networking_opportunities")}</h3>
              </div>
            </motion.div>

            <div ref={statsRef} className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[
                {
                  icon: <Briefcase className='h-8 w-8 text-pink-500' />,
                  key: "exhibitors",
                  value: "50+"
                },
                {
                  icon: <Megaphone className='h-8 w-8 text-purple-500' />,
                  key: "speakers",
                  value: "25+"
                },
                {
                  icon: <Users className='h-8 w-8 text-blue-500' />,
                  key: "workshops",
                  value: "15+"
                },
                {
                  icon: <Globe className='h-8 w-8 text-indigo-500' />,
                  key: "countries",
                  value: "20+"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className='bg-white/5 p-4 text-center border border-white/10 rounded-xl'
                >
                  <div className='flex justify-center mb-2'>{stat.icon}</div>
                  <div className='text-3xl font-bold'>{stat.value}</div>
                  <div className='text-sm text-slate-400'>{translate(stat.key)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
