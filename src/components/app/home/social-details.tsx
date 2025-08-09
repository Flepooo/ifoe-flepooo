"use client"

import { Locate, Mail, PhoneIcon } from "lucide-react"

import { useTranslate } from "@/hooks/use-translate"
import { PHONE_NUMBER } from "@/lib/constants"

export const HomeSocialDetails = () => {
  const translate = useTranslate()

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-3xl font-bold mb-6'>{translate("contactUs")}</h1>

      <div className='mb-4 flex gap-2 items-center'>
        <Locate className='size-4' />
        <p>{translate("mainAddress")}</p>
      </div>

      <div className='mb-4 flex gap-2 items-center'>
        <PhoneIcon className='size-4' />
        <bdi>{PHONE_NUMBER}</bdi>
      </div>

      <div className='mb-4 flex gap-2 items-center'>
        <Mail className='size-4' />
        <p>info@ifoe-sa.com</p>
      </div>
    </div>
  )
}
