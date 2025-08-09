import { AdminPageTitle } from "@/components/dashboard/title"
import { ApplicantsTable } from "@/components/dashboard/applicants/table"
import { TSearchParams } from "@/types"
import { PaginateData } from "@/components/dashboard/pagination"
import { EmptyState } from "@/components/app/empty-state"

import { getApplicants } from "@/actions/applicants"

type Props = {
  searchParams?: Promise<TSearchParams>
}

export default async function AdminBlogsPage({ searchParams }: Props) {
  const sp = await searchParams
  const users = await getApplicants({ ...sp, status: "attended" })
  /*   const applicants = await getAllApplicants() */

  return (
    <div>
      <AdminPageTitle title='الزائرين'>{/* <ExportExcelButton data={applicants} /> */}</AdminPageTitle>

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
