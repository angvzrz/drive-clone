import { Upload } from 'lucide-react';
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
          'h-auto w-auto cursor-pointer gap-2 !rounded-2xl px-4 py-2 outline-none',
          'bg-linear-[128.84deg,#0f6cbd_20.46%,#3c45ab_72.3%]',
          'hover:bg-linear-[128.84deg,#025caa_20.46%,#222b91_72.3%]',
          'text-sm font-medium text-primary-foreground',
          'shadow-xs transition-[color,box-shadow]',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'disabled:opacity-50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          'has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        ),
        allowedContent: 'hidden',
      }}
      content={{
        button({ ready }) {
          if (ready)
            return (
              <>
                <Upload /> Upload
              </>
            );
        },
      }}
    />
  );
}
