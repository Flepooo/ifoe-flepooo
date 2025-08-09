"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Lightbulb, ArrowRight } from "lucide-react"
import { useTranslate } from "@/hooks/use-translate"
import { LinkBtn } from "@/components/ui/link-btn"

import Link from "next/link"
import { WHATSAPP_URL } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function ConferenceSection() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const translate = useTranslate()

  useEffect(() => {
    const deadline = new Date("2025-09-02")
    deadline.setDate(deadline.getDate())

    const interval = setInterval(() => {
      const now = new Date()
      const difference = deadline.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className='py-20 px-4 md:px-6 bg-gradient-to-b from-background to-muted overflow-hidden'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
            {translate("whyYouShouldAttend")}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 ml-2'>{translate("conference")}</span>
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full mb-6' />
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>{translate("joinIndustryLeaders")}</p>
        </motion.div>

        <motion.div variants={container} initial='hidden' animate='show' className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          <motion.div variants={item}>
            <Card className='h-full overflow-hidden group border-muted-foreground/20 hover:border-primary/50 transition-all duration-300'>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 p-3 bg-primary/10 rounded-full w-fit'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>{translate("homeDescription")}</h3>
                <p className='text-muted-foreground flex-grow'>{translate("w01D")}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className='h-full overflow-hidden group border-muted-foreground/20 hover:border-primary/50 transition-all duration-300'>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 p-3 bg-primary/10 rounded-full w-fit'>
                  <Calendar className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>{translate("w02T")}</h3>
                <p className='text-muted-foreground flex-grow'>{translate("w02D")}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className='h-full overflow-hidden group border-muted-foreground/20 hover:border-primary/50 transition-all duration-300'>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 p-3 bg-primary/10 rounded-full w-fit'>
                  <Lightbulb className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>{translate("w03T")}</h3>
                <p className='text-muted-foreground flex-grow'>{translate("w03D")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className='relative rounded-2xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0' />
          <div className='absolute inset-0 mix-blend-overlay opacity-20 z-10' />

          <div className='relative z-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-0 items-center'>
              <div className='p-10 md:p-16'>
                <h3 className='text-3xl md:text-4xl font-bold mb-4 text-white'>{translate("hurryUp")}</h3>
                <p className='text-xl mb-6 text-white'>{translate("joinConference")}</p>

                <div className='grid grid-cols-4 gap-2 mb-8'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>{days}</div>
                    <div className='text-xs uppercase text-white'>Days</div>
                  </div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>{hours}</div>
                    <div className='text-xs uppercase text-white'>Hours</div>
                  </div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>{minutes}</div>
                    <div className='text-xs uppercase text-white'>Minutes</div>
                  </div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>{seconds}</div>
                    <div className='text-xs uppercase text-white'>Seconds</div>
                  </div>
                </div>

                <a href={WHATSAPP_URL} target='_blank'>
                  <Button size='lg' variant='secondary' className='group'>
                    {translate("registerNow")}
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <ArrowRight className='h-4 w-4' />
                    </motion.span>
                  </Button>
                </a>
              </div>

              <motion.div className='h-full' initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                <img src='/banners/44.png' alt='Conference' className='h-full w-full object-cover rounded-r-lg shadow-2xl  hover:rotate-0 transition-transform duration-500' />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
