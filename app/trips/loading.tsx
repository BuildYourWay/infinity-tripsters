import TripCardSkeleton from "../../components/TripCardSkeleton";

export default function TripsLoading() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="h-4 w-40 rounded-full bg-white/10" />
            <div className="mt-3 h-12 w-72 rounded-3xl bg-white/10" />
            <div className="mt-3 h-5 w-[420px] max-w-full rounded-2xl bg-white/10" />
          </div>
          <div className="h-24 w-44 rounded-[34px] bg-white/10" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[340px_1fr]">
          <aside className="lg:sticky lg:top-[92px] self-start">
            <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 backdrop-blur-xl">
              <div className="h-4 w-28 rounded-full bg-white/10 animate-pulse" />
              <div className="mt-6 space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-14 rounded-2xl bg-white/10 animate-pulse" />
                ))}
              </div>
            </div>
          </aside>

          <section className="grid gap-5 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <TripCardSkeleton key={i} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

