export default function TripDetailsLoading() {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden">
        <div className="h-[min(72vh,520px)] w-full bg-white/5 animate-pulse sm:h-[min(80vh,560px)] lg:h-[680px]" />
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr] lg:gap-6">
          <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl">
            <div className="h-4 w-28 rounded bg-white/10 animate-pulse" />
            <div className="mt-3 h-14 w-3/4 rounded bg-white/10 animate-pulse" />
            <div className="mt-3 h-5 w-[520px] max-w-full rounded bg-white/10 animate-pulse" />
            <div className="mt-6 grid gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-28 rounded-3xl bg-white/10 animate-pulse"
                />
              ))}
            </div>
          </div>
          <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl">
            <div className="h-4 w-36 rounded bg-white/10 animate-pulse" />
            <div className="mt-3 h-10 w-4/5 rounded bg-white/10 animate-pulse" />
            <div className="mt-3 h-5 w-2/3 rounded bg-white/10 animate-pulse" />
            <div className="mt-6 h-12 w-full rounded-full bg-white/10 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}

