"use client";

import { useTranslate } from "@/hooks/use-translate";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { sendContactMessageAction } from "@/actions/app";
import { motion, AnimatePresence } from "framer-motion";
import { showResponse } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Send, CheckCircle } from "lucide-react";
import { ContactSchema } from "@/lib/schema";
import { InputField } from "@/components/common/input-field";
import { LoadingButton } from "@/components/common/loading-button";
import { Form } from "@/components/ui/form";

export const ContactForm = () => {
  const translate = useTranslate();
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      subject: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof ContactSchema>) => sendContactMessageAction(data),
    onSuccess: (data) => {
      showResponse(data, () => {
        form.reset();
      });
    }
  });

  const handleSubmit = () => {
    mutation.mutate(form.getValues());
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white rounded-xl shadow-xl overflow-hidden'
    >
      <div className='bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white'>
        <h3 className='text-xl font-bold'>{translate("getInTouch")}</h3>
        <p className='text-blue-50 mt-1'>{translate("contactFormSubtitle")}</p>
      </div>

      <Form {...form}>
        <motion.form
          variants={formVariants}
          initial='hidden'
          animate='visible'
          onSubmit={form.handleSubmit(handleSubmit)}
          className='p-6 space-y-5'
        >
          <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
            <motion.div variants={itemVariants}>
              <InputField
                label={translate("firstName")}
                name='first_name'
                type='text'
                control={form.control}
                className='focus-within:border-blue-500 transition-colors'
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <InputField
                label={translate("lastName")}
                name='last_name'
                type='text'
                control={form.control}
                className='focus-within:border-blue-500 transition-colors'
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <InputField
              label={translate("email")}
              name='email'
              type='email'
              control={form.control}
              className='focus-within:border-blue-500 transition-colors'
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InputField
              label={translate("subject")}
              name='subject'
              type='text'
              control={form.control}
              className='focus-within:border-blue-500 transition-colors'
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InputField
              isTextarea
              label={translate("message")}
              name='message'
              type='text'
              control={form.control}
              className='focus-within:border-blue-500 transition-colors'
            />
          </motion.div>

          <motion.div variants={itemVariants} className='pt-2'>
            <LoadingButton
              className='w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
              loading={mutation.isPending}
              type='submit'
              variant='blue'
            >
              {!mutation.isPending && <Send className='w-4 h-4' />}
              {translate("sendMessage")}
            </LoadingButton>
          </motion.div>
        </motion.form>
      </Form>
    </motion.div>
  );
};
