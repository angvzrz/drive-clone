import { FilesHeader } from "@/components/FilesHeader/files-header";
import { FilesTable } from "@/components/FilesTable/files-table";
import { QUERIES } from "@/server/db/queries";
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
      <FilesHeader />
      <FilesTable folders={folders} files={files} />
    </main>
  );
}
