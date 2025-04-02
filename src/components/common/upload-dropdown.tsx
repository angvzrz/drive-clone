'use client';

import { useRouter, useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { FolderIcon, UploadIcon } from 'lucide-react';
import { UploadButton } from './upload-button';
import { uploadFolder } from '@/server/actions';

const handleFolderUpload = async (
  event: React.ChangeEvent<HTMLInputElement>,
  parentFolderId: number,
) => {
  const files = event.target.files;

  if (!files) return;

  const filesData = new FormData();
  Array.from(files).forEach((file) => {
    filesData.append('files', file);
    filesData.append('relativePath', file.webkitRelativePath);
  });

  uploadFolder(filesData, parentFolderId);
};

export function UploadDropdown() {
  const navigate = useRouter();
  const params = useParams<{ folderId: string }>();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="secondary"
          className={cn(
            'cursor-pointer',
            'rounded-2xl',
            'bg-linear-[128.84deg,#0f6cbd_20.46%,#3c45ab_72.3%]',
            'hover:bg-linear-[128.84deg,#025caa_20.46%,#222b91_72.3%]',
          )}
          asChild
        >
          <span>
            <UploadIcon /> Upload
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-24 bg-slate-900">
        <DropdownMenuItem>
          <div className="w-full">
            <UploadButton
              folderId={Number(params.folderId)}
              onUpload={() => navigate.refresh()}
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <label className="flex w-full cursor-pointer items-end gap-2">
            <input
              tabIndex={0}
              type="file"
              dir=""
              webkitdirectory=""
              multiple
              onChange={(e) => handleFolderUpload(e, Number(params.folderId))}
              className="sr-only"
            />
            <FolderIcon /> Folder
          </label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
