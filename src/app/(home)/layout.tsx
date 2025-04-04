export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      {/* Abstract background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] h-[70%] w-[70%] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] h-[60%] w-[60%] rounded-full bg-gradient-to-tr from-sky-500/10 to-transparent blur-3xl" />
        <div className="absolute top-[20%] left-[30%] h-[40%] w-[40%] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-1 items-center">{children}</main>
    </div>
  );
}
