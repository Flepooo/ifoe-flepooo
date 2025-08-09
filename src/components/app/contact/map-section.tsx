"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className='overflow-hidden border-none shadow-lg h-full'>
        <div className='relative pb-[75%] md:pb-[100%]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075839904!2d-74.2598756872249!3d40.69767006873312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2450bcb11d15b%3A0x8e89c60d8d71d1b7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680436704277!5m2!1sen!2s'
            className='absolute inset-0 w-full h-full'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </Card>
    </motion.div>
  );
}
