import db from './db';

export const QUERIES = {
  getFolders: function (folderId: number) {
    return db.folder.findMany({
      where: {
        parent: {
          equals: folderId,
        },
      },
      orderBy: { id: 'asc' },
    });
  },
  getFiles: function (folderId: number) {
    return db.file.findMany({
      where: {
        parent: {
          equals: folderId,
        },
      },
      orderBy: { id: 'asc' },
    });
  },
  getFolderById: async function (folderId: number) {
    const folder = await db.folder.findUnique({
      where: { id: folderId },
    });
    return folder;
  },
  getRootFolderForUser: async function (userId: string) {
    const folder = await db.folder.findFirst({
      where: {
        ownerId: userId,
        AND: { parent: null },
      },
    });

    return folder;
  },
};

export const MUTATIONS = {
  createFile: async function (input: {
    file: {
      name: string;
      size: number;
      url: string;
      fileKey: string;
      parent: number;
    };
    userId: string;
  }) {
    return db.file.create({
      data: { ...input.file, ownerId: input.userId },
    });
  },
  createFolder: async function (input: {
    folder: {
      name: string;
      parent: number;
    };
    userId: string;
  }) {
    return db.folder.create({
      data: { ...input.folder, ownerId: input.userId },
    });
  },
  onboardUser: async function (userId: string) {
    const newRootFolderId = await db.$transaction(async (tx) => {
      const rootFolder = await tx.folder.create({
        data: {
          name: 'root',
          ownerId: userId,
          parent: null,
        },
      });
      const rootFolderId = rootFolder.id;

      await tx.folder.create({
        data: {
          name: 'Documents',
          ownerId: userId,
          parent: rootFolderId,
        },
      });

      return rootFolderId;
    });

    return newRootFolderId;
  },
};
