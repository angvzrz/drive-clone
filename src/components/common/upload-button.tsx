import { FileIcon } from 'lucide-react';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { generateUploadButton } from '@uploadthing/react';
import { cn } from '@/lib/utils';

const UploadthingButton = generateUploadButton<OurFileRouter>();

interface UploadButtonProps {
  onUpload: () => void;
  folderId: number;
}

export function UploadButton({ onUpload, folderId }: UploadButtonProps) {
  return (
    <UploadthingButton
      endpoint="driveUploader"
      onClientUploadComplete={onUpload}
      input={{ folderId }}
      appearance={{
        button: cn(
          'relative flex !h-auto !w-full cursor-default',
          'items-center justify-start gap-2 rounded-sm !bg-transparent',
          '!px-2 !py-1.5 text-sm outline-hidden select-none',
          'focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8',
          '[&_svg]:pointer-events-none [&_svg]:shrink-0',
          '[&_svg:not([class*="size-"])]:size-4',
          '[&_svg:not([class*="text-"])]:text-muted-foreground',
        ),
        allowedContent: 'hidden',
      }}
      content={{
        button({ ready }) {
          if (ready)
            return (
              <>
                <FileIcon /> Files
              </>
            );
        },
      }}
    />
  );
}
