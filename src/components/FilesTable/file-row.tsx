import { File as FileIcon, Folder as FolderIcon } from 'lucide-react';
import type { File, Folder } from '@prisma/client';
import { TableCell, TableHead, TableRow } from '../ui/table';
import Link from 'next/link';

interface FileRowProps {
  file: File;
}

export function FileRow({ file }: FileRowProps) {
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
          href={`/folder/${folder.id}`}
          className="cursor-pointer text-neutral-400 hover:text-blue-300"
        >
          {folder.name}
        </Link>
      </TableCell>
      <TableCell className="text-neutral-400"></TableCell>
      <TableCell className="text-neutral-400"></TableCell>
    </TableRow>
  );
}
