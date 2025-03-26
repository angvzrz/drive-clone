'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { DriveLoader, UploadButton } from '../common';

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

  if (isGettingUser) {
    return <DriveLoader />;
  }

  return (
    <>
      {isAuthenticated ? (
        <UploadButton onUpload={() => navigate.refresh()} />
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
