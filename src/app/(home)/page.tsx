import { DriveButton } from '@/components/common/drive-button';
import { getServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default function HomePage() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Nimbus{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                Drive
              </span>
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-slate-400 md:text-xl">
              Cloud storage
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <form
              action={async () => {
                'use server';

                const supabase = await getServerClient();
                const session = await supabase.auth.getUser();

                if (!session.data.user?.id) return redirect('/sign-in');

                return redirect('/onboard');
              }}
            >
              <DriveButton label="Get Started" type="submit" />
            </form>
            <DriveButton label="Learn More" variant="secondary" />
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span>Free 2.2MB storage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
