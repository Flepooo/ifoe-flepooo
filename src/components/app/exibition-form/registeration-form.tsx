"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { SelectItem } from "@/components/ui/select"
import { ExibitionFormSchema } from "@/lib/schema"
import { useMutation } from "@tanstack/react-query"
import { useTranslate } from "@/hooks/use-translate"
import { InputField } from "@/components/common/input-field"
import { LoadingButton } from "@/components/common/loading-button"
import { SelectField } from "@/components/common/select-field"
import { sendApplicantAction } from "@/actions/app"
import { showResponse } from "@/lib/utils"

export default function RegistrationForm() {
  const translate = useTranslate()
  const form = useForm<z.infer<typeof ExibitionFormSchema>>({
    resolver: zodResolver(ExibitionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      type: "visitor"
    }
  })

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof ExibitionFormSchema>) => sendApplicantAction(data),
    onSuccess: (data) =>
      showResponse(data, () => {
        if (data.status === 201) {
          form.reset()
          localStorage.setItem("registered", "true")
        }
      })
  })

  function onSubmit() {
    mutation.mutate(form.getValues())
  }

  /*   if (localStorage.getItem("registered")) {
    return <AlreadyRegisteredMessage />
  } */

  return (
    <Card className='w-full max-w-xl mx-auto shadow-lg border-0 overflow-hidden'>
      <CardHeader className='bg-primary text-primary-foreground pb-6'>
        <div className='flex items-center justify-between mb-2'>
          <CardTitle className='text-2xl font-bold'>{translate("registerToExibition")}</CardTitle>
          <div className='flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full'>
            <CalendarIcon className='h-4 w-4' />
            <span className='text-sm font-medium'>Sep 3</span>
          </div>
        </div>
        <CardDescription className='text-primary-foreground/80'>{translate("completeTheExibitionForm")}</CardDescription>
      </CardHeader>
      <CardContent className='pt-6 pb-4 px-6'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            <InputField name='name' label={translate("name")} placeholder={translate("enterYourName")} control={form.control} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <InputField name='email' label={translate("email")} placeholder='example@domain.com' control={form.control} />
              <InputField name='phone' label={translate("phone")} placeholder='+209942213841' control={form.control} />
            </div>
            <InputField name='company' label={translate("company")} placeholder='X Coporation' control={form.control} />
            <SelectField name='type' label={translate("type")} control={form.control}>
              <SelectItem value='visitor'>{translate("visitor")}</SelectItem>
              <SelectItem value='exhibitor'>{translate("exhibitor")}</SelectItem>
            </SelectField>
            <LoadingButton loading={mutation.isPending}>{translate("submit")}</LoadingButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
