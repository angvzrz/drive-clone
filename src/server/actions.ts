'use server';

import { cookies } from 'next/headers';
import { FileEsque } from 'uploadthing/types';
import { UTApi } from 'uploadthing/server';
import { getServerClient } from '@/lib/supabase/server';
import { MUTATIONS } from './db/queries';
import db from './db/db';
import { FolderNode } from '@/types';
import { buildFolderTree } from '@/lib/utils';

const utApi = new UTApi();

export async function uploadFile(file: FileEsque, folderId: number) {
  const supabase = await getServerClient();
  const session = await supabase.auth.getUser();
  const userId = session.data.user?.id;

  if (!userId) return { error: 'Unauthorized' };

  // Upload file to storage
  const response = await utApi.uploadFiles(file);
  const { data: uploadedFile } = response;

  if (!uploadedFile) throw new Error('Error uploading file');

  await MUTATIONS.createFile({
    file: {
      name: uploadedFile.name,
      size: uploadedFile.size,
      url: uploadedFile.ufsUrl,
      fileKey: uploadedFile.key,
      parent: folderId,
    },
    userId,
  });
}

export async function uploadFolder(
  filesData: FormData,
  parentFolderId: number,
) {
  console.log('uploading folder');
  const supabase = await getServerClient();
  const session = await supabase.auth.getUser();
  const userId = session.data.user?.id;

  if (!userId) return { error: 'Unauthorized' };

  const files = filesData.getAll('files') as File[];
  const relativePaths = filesData.getAll('relativePath') as string[];
  const initialStructure = {};
  let folderStructure = initialStructure;

  for (let i = 0; i < files.length; i++) {
    const currentPath = relativePaths[i].split('/');
    folderStructure = buildFolderTree(files[i], currentPath, folderStructure);
  }

  await syncFolderContents(folderStructure, userId, parentFolderId);

  // Update cookies to force Next.js to revalidate the page and update content
  const c = await cookies();
  c.set('force-refresh', JSON.stringify(Math.random()));

  return { success: true };
}

async function syncFolderContents(
  folderStructure: FolderNode,
  ownerId: string,
  parentId: number,
) {
  for (const entry in folderStructure) {
    const currentEntry = folderStructure[entry];

    if (currentEntry instanceof File) {
      await uploadFile(currentEntry, Number(parentId));
    } else {
      const newFolder = await MUTATIONS.createFolder({
        folder: {
          name: entry,
          parent: Number(parentId),
        },
        userId: ownerId,
      });

      await syncFolderContents(currentEntry, ownerId, Number(newFolder.id));
    }
  }
}

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
