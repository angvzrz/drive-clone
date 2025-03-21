'use client';

import type { File, Folder } from '@prisma/client';
import { TableBody } from '../ui/table';
import { FileRow, FolderRow } from './file-row';

interface FilesListProps {
  folders: Folder[];
  files: File[];
}

export function FilesList({ folders, files }: FilesListProps) {
  if (!folders.length && !files.length) return null;

  return (
    <TableBody>
      {folders.map((folder) => (
        <FolderRow key={folder.id} folder={folder} />
      ))}
      {files.map((file) => (
        <FileRow key={file.id} file={file} />
      ))}
    </TableBody>
  );
}
