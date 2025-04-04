import { DriveButton } from '@/components/common/drive-button';
import { getServerClient } from '@/lib/supabase/server';
import { MUTATIONS, QUERIES } from '@/server/db/queries';
import { redirect } from 'next/navigation';

export default async function GetStartedPage() {
  const supabase = await getServerClient();
  const session = await supabase.auth.getUser();
  const userId = session.data.user?.id;

  if (!userId) return redirect('/sign-in');

  const rootFolder = await QUERIES.getRootFolderForUser(userId);

  if (!rootFolder) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <form
          action={async () => {
            'use server';

            const supabase = await getServerClient();
            const session = await supabase.auth.getUser();
            const userId = session.data.user?.id;

            if (!userId) return redirect('/sign-in');

            const rootFolderId = await MUTATIONS.onboardUser(userId);
            return redirect(`/f/${rootFolderId}`);
          }}
        >
          <DriveButton label="Create Drive" type="submit" />
        </form>
      </div>
    );
  }

  return redirect(`/f/${rootFolder.id}`);
}
