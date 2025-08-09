"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Calendar, MessageSquare, ArrowUpRight, Eye } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ContactMessage } from "@/types";
import moment from "moment";
import { useTranslate } from "@/hooks/use-translate";

export const ContactMessageModal = ({ message }: { message: ContactMessage }) => {
  const translate = useTranslate();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon'>
          <Eye className='h-4 w-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md md:max-w-lg'>
        <DialogHeader className='pb-2'>
          <div className='flex items-start justify-between mb-2'>
            <div className='flex items-center gap-3'>
              <Avatar className='h-10 w-10 border-2 border-primary'>
                <AvatarFallback className='bg-gradient-to-br from-violet-400 to-indigo-600 text-white font-medium'>
                  {message.first_name[0]}
                  {message.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className='text-lg font-semibold'>{message.subject}</DialogTitle>
                <DialogDescription className='text-sm opacity-80'>
                  {message.first_name} {message.last_name}
                </DialogDescription>
              </div>
            </div>
          </div>

          <div className='flex gap-4 text-sm text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <Mail className='h-3.5 w-3.5' />
              <span>{message.email}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Calendar className='h-3.5 w-3.5' />
              <span>{moment(message.created_at).fromNow()}</span>
            </div>
          </div>
        </DialogHeader>

        <Separator className='my-2' />

        <div className='mt-2 mb-6'>
          <div className='bg-muted/40 rounded-lg p-4 backdrop-blur-sm border border-muted'>
            <div className='flex items-start gap-2'>
              <MessageSquare className='h-4 w-4 mt-1 text-muted-foreground' />
              <p className='text-sm leading-relaxed whitespace-pre-wrap'>{message.message}</p>
            </div>
          </div>
        </div>

        <DialogFooter className='flex sm:justify-between items-center gap-2'>
          <DialogClose asChild>
            <Button size='sm' className='gap-1'>
              {translate("close")}
              <ArrowUpRight className='h-3.5 w-3.5' />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
