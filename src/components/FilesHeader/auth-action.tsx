'use client';

import { DriveLoader } from '../common';
import { Button } from '../ui/button';

interface AuthActionProps {
  isGettingUser: boolean;
  isAuthenticated: boolean;
  onSigningIn?: () => void;
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
      {isAuthenticated ? null : (
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
