'use client';

import { useRouter, useParams } from 'next/navigation';
import { DriveLoader, UploadButton } from '../common';
import { Button } from '../ui/button';
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

interface AuthActionProps {
  isGettingUser: boolean;
  isAuthenticated: boolean;
  onSigningIn: () => void;
}

export function AuthAction({
  isGettingUser,
  isAuthenticated,
  onSigningIn,
}: AuthActionProps) {
  const navigate = useRouter();
  const params = useParams<{ folderId: string }>();

  if (isGettingUser) {
    return <DriveLoader />;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <UploadButton
            onUpload={() => navigate.refresh()}
            folderId={Number(params.folderId)}
          />
          <input
            type="file"
            dir=""
            webkitdirectory=""
            multiple
            onChange={(e) => handleFolderUpload(e, Number(params.folderId))}
          />
        </>
      ) : (
        <p className="flex items-center gap-4">
          Try as guest
          <Button onClick={onSigningIn} className="cursor-pointer rounded-r-lg">
            Continue
          </Button>
        </p>
      )}
    </>
  );
}
