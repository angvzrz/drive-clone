'use client';

import { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { CaptchaVerification } from '@/components/common/captcha-verification';
import { DriveButton } from '@/components/common/drive-button';
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
      <DriveButton label="Sign In" onClick={() => setIsSigningIn(true)} />
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
