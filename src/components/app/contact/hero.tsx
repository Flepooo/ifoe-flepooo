"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className='relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden'>
      {/* Background with parallax effect */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-fixed z-0'
        style={{
          filter: "brightness(0.4)"
        }}
      />

      {/* Content with animation */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='max-w-3xl mx-auto'>
          <motion.h1 className='text-4xl md:text-6xl font-bold text-white mb-4' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {title}
          </motion.h1>

          <motion.p className='text-xl text-white/90' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {subtitle}
          </motion.p>

          <motion.div className='mt-8' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <div className='h-1 w-20 bg-primary mx-auto rounded-full' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
