"use client"

import { Button } from "@/components/ui/button"
import { Applicant } from "@/types"

import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import { transformApplicants } from "@/lib/utils"
import { useTranslate } from "@/hooks/use-translate"

const ExportExcelButton = ({ data }: { data: Applicant[] }) => {
  const t = useTranslate()

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(transformApplicants(data)) // Convert JSON to sheet
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    })

    const file = new Blob([excelBuffer], { type: "application/octet-stream" })
    saveAs(file, "applicants.xlsx")
  }
  return <Button onClick={handleExport}>{t("export")}</Button>
}

export default ExportExcelButton
