import { LoaderCircleIcon } from 'lucide-react';

interface DriveLoaderProps {
  size?: string | number;
}

export function DriveLoader({ size }: DriveLoaderProps) {
  return (
    <LoaderCircleIcon size={size} className="animate-spin text-slate-500" />
  );
}
