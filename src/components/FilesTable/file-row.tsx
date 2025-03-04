import { File as FileIcon, Folder as FolderIcon } from "lucide-react";
import type { File, Folder } from "@/lib/mock-data";
import { TableCell, TableHead, TableRow } from "../ui/table";

interface FileRowProps {
  file: File;
  onClickFile: () => void;
}

export function FileRow({ file, onClickFile }: FileRowProps) {
  return (
    <TableRow
      key={file.id}
      onClick={onClickFile}
      className="border-slate-700 hover:[&_th]:text-blue-300"
    >
      <TableHead scope="row" className="pl-4 text-neutral-100">
        <FileIcon />
      </TableHead>
      <TableCell>
        <span className="cursor-pointer text-neutral-400">{file.name}</span>
      </TableCell>
      <TableCell className="text-neutral-400">{file.modified}</TableCell>
      <TableCell className="text-neutral-400">{file.size}</TableCell>
    </TableRow>
  );
}

interface FolderRowProps {
  folder: Folder;
  onClickFolder: () => void;
}

export function FolderRow({ folder, onClickFolder }: FolderRowProps) {
  return (
    <TableRow
      key={folder.id}
      onClick={onClickFolder}
      className="border-slate-700"
    >
      <TableHead scope="row" className="pl-4 text-neutral-100">
        <FolderIcon />
      </TableHead>
      <TableCell className="cursor-pointer text-neutral-400 hover:text-blue-300">
        {folder.name}
      </TableCell>
      <TableCell className="text-neutral-400"></TableCell>
      <TableCell className="text-neutral-400"></TableCell>
    </TableRow>
  );
}
