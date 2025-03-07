"use client";

import { Table, TableHead, TableHeader, TableRow } from "../ui/table";
import { FilesList } from "./files-list";
import type { File, Folder } from "@prisma/client";

interface FilesTableProps {
  folders: Folder[];
  files: File[];
}

export function FilesTable({ folders, files }: FilesTableProps) {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900">
      <Table className="">
        <TableHeader>
          <TableRow className="border-slate-700">
            <TableHead className="w-0" />
            <TableHead className="font-bold text-neutral-100">Name</TableHead>
            <TableHead className="font-bold text-neutral-100">
              Created
            </TableHead>
            <TableHead className="font-bold text-neutral-100">Size</TableHead>
          </TableRow>
        </TableHeader>
        <FilesList folders={folders} files={files} />
      </Table>
    </section>
  );
}
