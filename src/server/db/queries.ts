import db from './db';

export const QUERIES = {
  getFolders: function (folderId: number) {
    return db.folder.findMany({
      where: {
        parent: {
          equals: folderId,
        },
      },
    });
  },

  getFiles: function (folderId: number) {
    return db.file.findMany({
      where: {
        parent: {
          equals: folderId,
        },
      },
    });
  },
};

export const MUTATIONS = {
  createFile: async function (input: {
    file: {
      name: string;
      size: number;
      url: string;
      parent: number;
    };
    userId: string;
  }) {
    return db.file.create({
      data: { ...input.file, ownerId: input.userId },
    });
  },
};
