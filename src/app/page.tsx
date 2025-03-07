import { Upload } from "lucide-react";
import { FilesTable } from "@/components/FilesTable/files-table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import db from "@/lib/db";

export default async function Home() {
  const folders = await db.folder.findMany();
  const files = await db.file.findMany();

  return (
    <main className="min-h-screen p-8">
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
      <FilesTable folders={folders} files={files} />
    </main>
  );
}
