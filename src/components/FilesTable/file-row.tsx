import { useTransition } from 'react';
import Link from 'next/link';
import { FileIcon, FolderIcon, Trash2Icon } from 'lucide-react';
import type { File, Folder } from '@prisma/client';
import { deleteFile } from '@/server/actions';
import { TableCell, TableHead, TableRow } from '../ui/table';
import { DriveLoader } from '../common';

interface FileRowProps {
  file: File;
}

export function FileRow({ file }: FileRowProps) {
  const [isPending, startTransition] = useTransition();

  const deleteFileAction = () => {
    startTransition(async () => {
      await deleteFile(Number(file.id));
    });
  };

  return (
    <TableRow key={file.id} className="group border-slate-700">
      <TableHead
        scope="row"
        className="pl-4 text-neutral-100 group-has-[span:hover]:text-blue-300"
      >
        <FileIcon />
      </TableHead>
      <TableCell>
        <a
          href={file.url}
          className="cursor-pointer text-neutral-400 hover:text-blue-300"
          target="_blank"
        >
          {file.name}
        </a>
      </TableCell>
      <TableCell className="text-neutral-400">
        {file.createdAt.toString()}
      </TableCell>
      <TableCell className="text-neutral-400">{file.size}</TableCell>
      <TableCell>
        <div className="flex items-center justify-center px-2 text-neutral-400">
          {isPending ? (
            <DriveLoader size={20} />
          ) : (
            <button
              onClick={deleteFileAction}
              aria-label="Delete file"
              className="flex cursor-pointer items-center hover:text-red-400"
            >
              <Trash2Icon className="h-5 w-5" />
            </button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}

interface FolderRowProps {
  folder: Folder;
}

export function FolderRow({ folder }: FolderRowProps) {
  return (
    <TableRow key={folder.id} className="group border-slate-700">
      <TableHead
        scope="row"
        className="pl-4 text-neutral-100 group-has-[span:hover]:text-blue-300"
      >
        <FolderIcon />
      </TableHead>
      <TableCell>
        <Link
          href={`/f/${folder.id}`}
          className="cursor-pointer text-neutral-400 hover:text-blue-300"
        >
          {folder.name}
        </Link>
      </TableCell>
      <TableCell />
      <TableCell />
      <TableCell />
    </TableRow>
  );
}
