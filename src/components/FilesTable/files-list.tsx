"use client";

import { useState } from "react";
import { getCurrentFiles, getCurrentFolders } from "@/lib/mock-data";
import { TableBody } from "../ui/table";
import { FileRow, FolderRow } from "./file-row";

export function FilesList() {
  const [currentFolder, setCurrentFolder] = useState<string>("root");

  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId);
  };

  const currentFolders = getCurrentFolders(currentFolder);
  const currentFiles = getCurrentFiles(currentFolder);
  if (!currentFiles.length && !currentFolders.length) return null;

  return (
    <TableBody>
      {currentFolders.map((folder) => (
        <FolderRow
          key={folder.id}
          folder={folder}
          onClickFolder={() => handleFolderClick(folder.id)}
        />
      ))}
      {currentFiles.map((file) => (
        <FileRow key={file.id} file={file} onClickFile={() => {}} />
      ))}
    </TableBody>
  );
}
