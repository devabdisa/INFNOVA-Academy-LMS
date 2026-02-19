export default function CoursesLoading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-white/5" />
            <div className="h-4 w-96 animate-pulse rounded-lg bg-white/5" />
          </div>
          <div className="h-12 w-48 animate-pulse rounded-lg bg-white/5" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-[400px] w-full animate-pulse rounded-2xl bg-white/5 border border-white/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
