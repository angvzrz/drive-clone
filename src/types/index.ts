import type { Params } from 'next/dist/server/request/params';
import type { ReadonlyURLSearchParams } from 'next/navigation';

export type PageProps = {
  params: Promise<Params>;
  searchParams: Promise<ReadonlyURLSearchParams>;
};

export type FolderNode = {
  [key: string]: File | FolderNode;
};
