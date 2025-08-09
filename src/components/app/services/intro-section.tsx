"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { LinkBtn } from "@/components/ui/link-btn"
import { ourProcessArServices, ourProcessEnServices, whyChooseUsArServices, whyChooseUsEnServices } from "@/lib/lists"
import translate from "@/lib/translate"
import { ArrowLeft, CheckCircle, ArrowRight, Users, Clock, Award, Zap } from "lucide-react"
import { useLanguage } from "@/hooks/use-translate"

export function ServicesSections() {
  const language = useLanguage()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const whyChooseUs = language === "ar" ? whyChooseUsArServices : whyChooseUsEnServices
  const ourProcess = language === "ar" ? ourProcessArServices : ourProcessEnServices
  const isRtl = language === "ar"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const processIcons = [<Zap key='zap' className='w-6 h-6' />, <Users key='users' className='w-6 h-6' />, <Clock key='clock' className='w-6 h-6' />, <Award key='award' className='w-6 h-6' />]

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-black'>
        <div className='absolute bottom-0 left-0 right-0'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='w-full h-auto'>
            <path
              fill='#ffffff'
              fillOpacity='1'
              d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        {/* Services List */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className='mb-20'></motion.div>

        {/* Why Choose Us Section */}
        <motion.section ref={ref} initial='hidden' animate={controls} variants={containerVariants} className='mb-24'>
          <div className='text-center mb-12'>
            <motion.div variants={itemVariants} className='inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4'>
              {translate("whyChooseUs", language)}
            </motion.div>
            <motion.h2 variants={itemVariants} className='text-3xl md:text-4xl font-bold mb-4'>
              {translate("whyChooseOurServices", language)}
            </motion.h2>
            <motion.div variants={itemVariants} className='w-20 h-1 bg-blue-600 mx-auto'></motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {whyChooseUs.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }} className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-50 p-3 rounded-lg'>
                    <CheckCircle className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>{feature.split(":")[0]}</h3>
                    <p className='text-gray-600'>{feature.split(":")[1] || ""}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Process Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='mb-24 py-16 px-4 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-sm'>
          <div className='text-center mb-16'>
            <div className='inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4'>{translate("process", language)}</div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>{translate("ourProcess", language)}</h2>
            <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
          </div>

          <div className='relative'>
            {/* Connection Line */}
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0'></div>

            <div className='grid md:grid-cols-4 gap-8 relative z-10'>
              {ourProcess.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className='relative'>
                  <div className='bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 h-full flex flex-col items-center'>
                    <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center mb-4 shadow-md'>{processIcons[index % processIcons.length]}</div>
                    <div className='absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>{index + 1}</div>
                    <h3 className='font-semibold text-lg mb-3'>{step.split(":")[0]}</h3>
                    <p className='text-gray-600 text-sm'>{step.split(":")[1] || ""}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='mb-24'>
          <div className='text-center mb-12'>
            <div className='inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4'>{translate("testimonials", language)}</div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>{translate("ourCustomers", language)}</h2>
            <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                quote: "العمل مع هذا الفريق غيّر أعمالنا. كان خبراؤهم في تطوير الامتياز لا يقدرون بثمن.",
                author: "جون سميث",
                role: "الرئيس التنفيذي، FoodChain Inc.",
                image: "/bg.jpg?height=80&width=80"
              },
              {
                quote: "الدعم والتوجيه الذي تلقيناه ساعدنا على التوسع على مستوى البلاد في غضون 18 شهرًا فقط.",
                author: "سارة جونسون",
                role: "المؤسسة، ServicePro",
                image: "/bg.jpg?height=80&width=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
                className='bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition-all duration-300'
              >
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-16 h-16 rounded-full overflow-hidden bg-gray-200'>
                    <img src={"/banners/02.jpg"} alt={testimonial.author} className='w-full h-full object-cover' />
                  </div>
                  <div>
                    <p className='font-semibold text-lg'>{testimonial.author}</p>
                    <p className='text-sm text-gray-500'>{testimonial.role}</p>
                  </div>
                </div>
                <div className='relative'>
                  <div className='absolute -top-4 -left-2 text-6xl text-blue-200 opacity-50 font-serif'>"</div>
                  <p className='text-gray-700 relative z-10 italic'>"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
      </div>
    </div>
  )
}
