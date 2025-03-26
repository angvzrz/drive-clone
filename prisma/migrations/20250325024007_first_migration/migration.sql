-- CreateTable
CREATE TABLE "File" (
    "id" BIGSERIAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "parent" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" BIGSERIAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parent" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "file_parent_index" ON "File"("parent");

-- CreateIndex
CREATE INDEX "file_owner_id_index" ON "File"("ownerId");

-- CreateIndex
CREATE INDEX "folder_parent_index" ON "Folder"("parent");

-- CreateIndex
CREATE INDEX "folder_owner_id_index" ON "Folder"("ownerId");
