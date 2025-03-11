import db from "./db";

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
