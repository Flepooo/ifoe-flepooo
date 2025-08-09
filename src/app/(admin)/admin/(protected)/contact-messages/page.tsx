import { AdminPageTitle } from "@/components/dashboard/title";
import { PaginateData } from "@/components/dashboard/pagination";
import { EmptyState } from "@/components/app/empty-state";

import { ContactMessagesTable } from "@/components/dashboard/contact-messages/table";
import { getAllMessages } from "@/actions/message";

export default async function AdminBlogsPage() {
  const messages = await getAllMessages();

  return (
    <div>
      <AdminPageTitle title='الرسائل' />

      {!messages?.data || messages?.data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className='space-y-4'>
          <ContactMessagesTable messages={messages.data} />
          <PaginateData
            hasNextPage={!!messages.next_page_url}
            hasPreviousPage={!!messages.prev_page_url}
            links={messages.links}
          />
        </div>
      )}
    </div>
  );
}
