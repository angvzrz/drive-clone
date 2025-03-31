import type { Params } from 'next/dist/server/request/params';
import type { ReadonlyURLSearchParams } from 'next/navigation';

export type PageProps = {
  params: Promise<Params>;
  searchParams: Promise<ReadonlyURLSearchParams>;
};

export type FolderNode = {
  [key: string]: File | FolderNode;
};

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?: string;
  }
}
