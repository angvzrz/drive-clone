import { cva } from 'class-variance-authority';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const buttonVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      primary:
        'border-0 bg-gradient-to-r from-cyan-500 to-sky-500 text-white hover:from-cyan-600 hover:to-sky-600',
      secondary:
        'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-50',
    },
  },
});

interface DriveButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function DriveButton({ label, variant = 'primary' }: DriveButtonProps) {
  return (
    <Button
      variant={variant === 'primary' ? 'default' : 'outline'}
      size="lg"
      className={cn(buttonVariants({ variant }))}
    >
      {label}
    </Button>
  );
}
