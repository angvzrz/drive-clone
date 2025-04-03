'use client';

import { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CaptchaVerification } from '@/components/common/captcha-verification';
import { createClient } from '@/lib/supabase/client';

export default function SignInPage() {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const captcha = useRef<HCaptcha>(null);

  const handleSignIn = async (captchaToken: string) => {
    setIsSigningIn(true);

    const supabase = createClient();
    const { data } = await supabase.auth.signInAnonymously({
      options: { captchaToken },
    });

    setIsSigningIn(false);
    captcha.current?.resetCaptcha();

    if (data.user !== null) console.log('User signed in:', data.user);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button
        onClick={() => setIsSigningIn(true)}
        className={cn(
          'cursor-pointer border-0',
          'bg-gradient-to-r from-cyan-500 to-sky-500',
          'text-white hover:from-cyan-600 hover:to-sky-600',
        )}
      >
        Sign In
      </Button>
      {isSigningIn && (
        <CaptchaVerification
          captcha={captcha}
          onVerify={handleSignIn}
          handleClose={() => setIsSigningIn(false)}
        />
      )}
    </div>
  );
}
