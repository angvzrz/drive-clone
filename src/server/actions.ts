'use server';

import { UTApi } from 'uploadthing/server';
import { getServerClient } from '@/lib/supabase/server';
import db from './db/db';
import { cookies } from 'next/headers';

const utApi = new UTApi();

export async function deleteFile(fileId: number) {
  const supabase = await getServerClient();
  const session = await supabase.auth.getUser();

  if (!session.data.user?.id) return { error: 'Unauthorized' };

  const file = await db.file.findUnique({
    where: { id: fileId },
  });

  if (!file) return { error: 'File not found' };

  // Delete file from storage
  await utApi.deleteFiles(file.fileKey);
  // Delete file from database
  await db.file.delete({
    where: {
      id: fileId,
      AND: { ownerId: session.data.user.id },
    },
  });

  // Update cookies to force Next.js to revalidate the page and update content
  const c = await cookies();
  c.set('force-refresh', JSON.stringify(Math.random()));

  return { success: true };
}
