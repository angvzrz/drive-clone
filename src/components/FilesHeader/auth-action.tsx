'use client';

import { DriveLoader, UploadDropdown } from '../common';
import { Button } from '../ui/button';

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
  if (isGettingUser) {
    return <DriveLoader />;
  }

  return (
    <>
      {isAuthenticated ? (
        <UploadDropdown />
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
