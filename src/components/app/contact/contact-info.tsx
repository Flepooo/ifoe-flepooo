"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/constants"
import { useTranslate } from "@/hooks/use-translate"

interface ContactInfoProps {
  language: string
}

export default function ContactInfo({ language }: ContactInfoProps) {
  const translate = useTranslate()

  const contactItems = [
    {
      icon: <Mail className='h-8 w-8' />,
      title: "email",
      content: "info@ifoe-sa.com",
      href: "mailto:info@ifoe-sa.com",
      delay: 0
    },
    {
      icon: <Phone className='h-8 w-8' />,
      title: "phone",
      content: PHONE_NUMBER,
      href: WHATSAPP_URL,
      delay: 0.2
    },
    {
      icon: <MapPin className='h-8 w-8' />,
      title: "address",
      content: language === "en" ? "Jeddah Exhibition and Convention Center" : "مركز جدة للمعارض والمؤتمرات",
      delay: 0.4
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className='py-16 relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3' />

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-6' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-100px" }}>
          {contactItems.map((item, index) => (
            <motion.a key={index} variants={itemVariants} href={item?.href} target='_blank'>
              <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <CardContent className='p-8 flex flex-col items-center text-center'>
                  <div className='mb-6 p-4 rounded-full bg-primary/10 text-primary'>{item.icon}</div>
                  <h3 className='text-xl font-semibold mb-3 text-right'>{translate(item.title)}</h3>
                  <p className='text-muted-foreground'>{item.content}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
