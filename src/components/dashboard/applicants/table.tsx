"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTranslate } from "@/hooks/use-translate"

import { Applicant } from "@/types"
import moment from "moment"
import { DeleteModal } from "../delete-modal"
import { deleteApplicantAction } from "@/actions/applicants"

export function ApplicantsTable({ applicants }: { applicants: Applicant[] }) {
  const t = useTranslate()

  return (
    <div className='mt-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>رقم الهاتف</TableHead>
            <TableHead>الايميل</TableHead>
            <TableHead>اسم الشركة</TableHead>
            <TableHead>نوع المتقدم</TableHead>
            <TableHead>تم التقديم في</TableHead>
            <TableHead>#</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants?.map((msg, index) => (
            <TableRow key={msg.id}>
              <TableCell>{msg.id}</TableCell>
              <TableCell>{msg.name}</TableCell>
              <TableCell>{msg.phone}</TableCell>
              <TableCell>{msg.email}</TableCell>
              <TableCell>{msg.company_name}</TableCell>
              <TableCell>{t(msg.type)}</TableCell>
              <TableCell>{moment(msg.created_at).fromNow()}</TableCell>
              <TableCell>
                <DeleteModal deletedId={msg.id} forceAction={deleteApplicantAction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
