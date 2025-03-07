"use client";

import { useState } from "react";
import { TableBody } from "../ui/table";
import { FileRow, FolderRow } from "./file-row";
import type { File, Folder } from "@prisma/client";

interface FilesListProps {
  folders: Folder[];
  files: File[];
}

export function FilesList({ folders, files }: FilesListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentFolder, setCurrentFolder] = useState<number>(1);

  const handleFolderClick = (folderId: number) => {
    setCurrentFolder(folderId);
  };

  if (!folders.length && !files.length) return null;

  return (
    <TableBody>
      {folders.map((folder) => (
        <FolderRow
          key={folder.id}
          folder={folder}
          onClickFolder={() => handleFolderClick(1)}
        />
      ))}
      {files.map((file) => (
        <FileRow key={file.id} file={file} onClickFile={() => {}} />
      ))}
    </TableBody>
  );
}
