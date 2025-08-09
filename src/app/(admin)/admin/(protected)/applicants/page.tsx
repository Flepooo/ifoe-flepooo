import { AdminPageTitle } from "@/components/dashboard/title"
import { ApplicantsTable } from "@/components/dashboard/applicants/table"
import { TSearchParams } from "@/types"
import { PaginateData } from "@/components/dashboard/pagination"
import { EmptyState } from "@/components/app/empty-state"

import { getAllApplicants, getApplicants } from "@/actions/applicants"
import ExportExcelButton from "@/components/dashboard/applicants/download-link"

type Props = {
  searchParams?: Promise<TSearchParams>
}

export default async function AdminBlogsPage({ searchParams }: Props) {
  const sp = await searchParams
  const users = await getApplicants({
    ...sp,
    status: "all"
  })
  const applicants = await getAllApplicants()

  console.log(users)

  return (
    <div>
      <AdminPageTitle title='المتقدمين للمعرض'>
        <ExportExcelButton data={applicants} />
      </AdminPageTitle>

      {!users?.data || users?.data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className='space-y-4'>
          <ApplicantsTable applicants={users.data} />
          <PaginateData hasNextPage={!!users.next_page_url} hasPreviousPage={!!users.prev_page_url} links={users.links} />
        </div>
      )}
    </div>
  )
}
