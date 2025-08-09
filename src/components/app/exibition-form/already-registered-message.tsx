"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";

export function AlreadyRegisteredMessage() {
  const translate = useTranslate();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full'
      >
        <Card className='border-0 shadow-lg'>
          <CardHeader className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg pb-6'>
            <div className='flex justify-center mb-2'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle size={56} className='text-white' />
              </motion.div>
            </div>
            <CardTitle className='text-center text-2xl font-bold'>
              {translate("youAreAlreadyRegistered")}
            </CardTitle>
          </CardHeader>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <p className='text-center text-slate-600'>
                {translate("helloYouAreAlreadyRegistered")}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
