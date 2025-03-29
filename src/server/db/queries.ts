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
};
