import { DriveButton } from '@/components/common/drive-button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      {/* Abstract background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] h-[70%] w-[70%] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] h-[60%] w-[60%] rounded-full bg-gradient-to-tr from-sky-500/10 to-transparent blur-3xl" />
        <div className="absolute top-[20%] left-[30%] h-[40%] w-[40%] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-1 items-center">
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
                <DriveButton label="Get Started" />
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
      </main>
    </div>
  );
}
