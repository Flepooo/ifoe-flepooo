"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { ContactMessage } from "@/types";
import { ContactMessageModal } from "./view-modal";
export function ContactMessagesTable({ messages }: { messages: ContactMessage[] }) {
  console.log("Message");
  return (
    <div className='mt-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>الايميل</TableHead>
            <TableHead>الدور</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages?.map((msg, index) => (
            <TableRow key={msg.id}>
              <TableCell>{msg.id}</TableCell>
              <TableCell>{msg.first_name + " " + msg.last_name}</TableCell>
              <TableCell>{msg.email}</TableCell>
              <TableCell>{msg.subject}</TableCell>
              <TableCell className='flex gap-2'>
                <ContactMessageModal message={msg} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
