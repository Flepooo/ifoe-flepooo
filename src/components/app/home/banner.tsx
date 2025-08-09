"use client"

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useTranslate } from "@/hooks/use-translate"
import { ArrowRight } from "lucide-react"
import { LinkBtn } from "@/components/ui/link-btn"

export const HomeBanner = () => {
  const translate = useTranslate()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const x1 = useMotionValue(0)
  const y1 = useMotionValue(0)
  const x2 = useMotionValue(0)
  const y2 = useMotionValue(0)
  const x3 = useMotionValue(0)
  const y3 = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY }
      setMousePosition(pos)

      const calculateMovement = (axis: "x" | "y", strength = 20) => {
        const windowSize = axis === "x" ? window.innerWidth : window.innerHeight
        const mousePos = axis === "x" ? pos.x : pos.y
        const percentage = mousePos / windowSize - 0.5
        return percentage * strength
      }

      x1.set(calculateMovement("x", -15))
      y1.set(calculateMovement("y", -15))

      x2.set(calculateMovement("x", 20))
      y2.set(calculateMovement("y", 20))

      x3.set(calculateMovement("x", 10))
      y3.set(calculateMovement("y", 10))
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.section ref={ref} className='relative h-screen w-full overflow-hidden' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: "url('/banners/01.jpg')",
          y,
          scale
        }}
      />

      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80' />

      <motion.div className='absolute top-20 left-20 w-40 h-40 border border-white/10 rounded-full' style={{ x: x1, y: y1 }} />
      <motion.div className='absolute bottom-40 right-20 w-60 h-60 border border-white/10 rounded-full' style={{ x: x2, y: y2 }} />
      <motion.div className='absolute top-1/3 right-1/4 w-20 h-20 border border-white/10 rounded-full' style={{ x: x3, y: y3 }} />

      {/* Content */}
      <motion.div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white' style={{ opacity }}>
        <div className='space-y-8 max-w-4xl'>
          <motion.h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}>
            <span className='text-white text-transparent'>{translate("homeTitle")}</span>
          </motion.h1>

          <motion.p className='text-base sm:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto text-white/80' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {translate("homeDescription")}
          </motion.p>

          <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <LinkBtn
              href={"/exibition-form"}
              size='lg'
              className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-full px-8 py-6 text-base sm:text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group'
            >
              {translate("loginToF")}
              <motion.span className='inline-block ml-2' initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <ArrowRight className='h-5 w-5' />
              </motion.span>
            </LinkBtn>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
