import { Upload } from "lucide-react";
import { FilesTable } from "@/components/FilesTable/files-table";
import { QUERIES } from "@/server/db/queries";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageProps } from "@/types";

export default async function DriveClone({ params }: PageProps) {
  const routeParams = await params;
  const folderId = routeParams.folderId as string;
  console.log({ folderId });

  const parsedFolderId = parseInt(folderId);
  if (isNaN(parsedFolderId)) {
    return <p>Invalid folder ID</p>;
  }

  const [folders, files] = await Promise.all([
    QUERIES.getFolders(parsedFolderId),
    QUERIES.getFiles(parsedFolderId),
  ]);

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
