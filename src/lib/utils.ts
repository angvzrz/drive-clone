import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FolderNode } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Builds a folder tree based on the file path provided by webkitRelativePath */
export function buildFolderTree(
  file: File,
  path: string[],
  tree: FolderNode,
): FolderNode {
  if (path.length === 2) {
    const lastTree = {
      [path[0]]: {
        ...tree[path[0]],
        [path[1]]: file,
      },
    };

    return lastTree;
  }

  const nextFolder = (tree[path[0]] as FolderNode) ?? {};
  const subTree = buildFolderTree(file, path.slice(1), nextFolder);

  const resultTree = {
    ...tree,
    [path[0]]: {
      ...tree[path[0]],
      ...subTree,
    },
  };

  return resultTree;
}
