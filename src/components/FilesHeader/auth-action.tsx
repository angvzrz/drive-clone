'use client';

import { LoaderCircle } from 'lucide-react';
import { UploadButton } from '../common';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

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
    return <LoaderCircle className="animate-spin text-slate-500" />;
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
