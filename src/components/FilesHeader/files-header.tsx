'use client';

import { useEffect, useMemo, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { Button } from '../ui/button';
import { UploadButton } from '../common';
import { createClient } from '@/lib/supabase/client';
import { ShieldUser, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? '';

export function FilesHeader() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      console.log({ data });
      setIsAuthenticated(data.user !== null);
    };
    getUser();
  }, [isAuthenticated]);

  const handleSignIn = async (captchaToken: string) => {
    await supabase.auth.signInAnonymously({
      options: { captchaToken },
    });
    setIsSigningIn(false);
  };

  return (
    <section className="flex justify-between py-4">
      <h2 className="text-xl font-semibold tracking-tight">My Files</h2>
      {isAuthenticated ? (
        <UploadButton />
      ) : (
        <p className="flex items-center gap-4">
          Try as guest
          <Button
            onClick={() => setIsSigningIn(true)}
            className="cursor-pointer rounded-r-lg"
          >
            Continue
          </Button>
        </p>
      )}
      {isSigningIn && (
        <div
          className={cn(
            'absolute',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'top-2/12',
            'left-1/2',
            'flex',
            'flex-col',
            'gap-2',
            'items-center',
            'z-10',
            'rounded-xl',
            'bg-slate-50 p-24',
          )}
        >
          <div className="flex items-center gap-1">
            <h3 className="text-md font-semibold text-slate-700">
              Security Verification
            </h3>
            <ShieldUser className="text-slate-700" />
          </div>
          <X
            className="absolute top-4 right-4 cursor-pointer text-gray-500"
            onClick={() => setIsSigningIn(false)}
          />
          <HCaptcha sitekey={hcaptchaSiteKey} onVerify={handleSignIn} />
        </div>
      )}
    </section>
  );
}
