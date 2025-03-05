"use client";

import { Table, TableHead, TableHeader, TableRow } from "../ui/table";
import { FilesList } from "./files-list";

export function FilesTable() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900">
      <Table className="">
        <TableHeader>
          <TableRow className="border-slate-700">
            <TableHead className="w-0" />
            <TableHead className="font-bold text-neutral-100">Name</TableHead>
            <TableHead className="font-bold text-neutral-100">
              Modified
            </TableHead>
            <TableHead className="font-bold text-neutral-100">Size</TableHead>
          </TableRow>
        </TableHeader>
        <FilesList />
      </Table>
    </section>
  );
}
