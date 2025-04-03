import { Ref } from 'react';
import { cn } from '@/lib/utils';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { ShieldUserIcon, XIcon } from 'lucide-react';

const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? '';

interface CaptchaVerificationProps {
  captcha: Ref<HCaptcha>;
  handleClose: () => void;
  onVerify: (token: string) => void;
}

export function CaptchaVerification({
  captcha,
  handleClose,
  onVerify,
}: CaptchaVerificationProps) {
  return (
    <div
      className={cn(
        'absolute top-2/12 left-1/2 z-10',
        '-translate-x-1/2 -translate-y-1/2',
        'flex flex-col items-center gap-2',
        'rounded-xl bg-slate-50 p-24',
      )}
    >
      <div className="flex items-center gap-1">
        <h3 className="text-md font-semibold text-slate-700">
          Security Verification
        </h3>
        <ShieldUserIcon className="text-slate-700" />
      </div>
      <XIcon
        className="absolute top-4 right-4 cursor-pointer text-gray-500"
        onClick={handleClose}
      />
      <HCaptcha ref={captcha} sitekey={hcaptchaSiteKey} onVerify={onVerify} />
    </div>
  );
}
