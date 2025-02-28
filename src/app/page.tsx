import { File, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { mockFiles } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <section className="flex justify-between py-4">
        <h2 className="text-xl font-semibold tracking-tight">My Files</h2>
        <Button
          variant="secondary"
          className={cn(
            "cursor-pointer",
            "rounded-2xl",
            "bg-linear-[128.84deg,#0f6cbd_20.46%,#3c45ab_72.3%]",
            "hover:bg-linear-[128.84deg,#025caa_20.46%,#222b91_72.3%]",
          )}
        >
          <Upload />
          Upload
        </Button>
      </section>
      <section className="rounded-2xl border border-slate-700 bg-slate-900">
        <Table>
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
          <TableBody>
            {mockFiles.map((file) => (
              <TableRow key={file.id} className="border-slate-700">
                <TableHead scope="row" className="pl-4 text-neutral-100">
                  <File />
                </TableHead>
                <TableCell className="cursor-pointer text-neutral-400 hover:underline">
                  {file.name}
                </TableCell>
                <TableCell className="text-neutral-400">
                  {file.modified}
                </TableCell>
                <TableCell className="text-neutral-400">{file.size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
