export default function CourseDetailLoading() {
  return (
    <div className="mx-auto w-[1101px] min-h-screen bg-white border-x border-gray-100 flex flex-col">
      <div className="h-20 w-full animate-pulse bg-gray-50 border-b border-gray-100" />

      <div className="px-8 py-4">
        <div className="h-4 w-32 animate-pulse bg-gray-100 rounded" />
      </div>

      <div className="mx-auto w-[1037px] h-[276px] animate-pulse bg-gray-100 rounded-[10px] mt-4" />

      <div className="px-8 py-12 flex gap-12">
        <div className="flex-1 space-y-8">
          <div className="h-48 w-full animate-pulse bg-gray-50 rounded-[10px]" />
          <div className="h-64 w-full animate-pulse bg-gray-50 rounded-[10px]" />
        </div>
        <div className="w-[320px] h-[490px] animate-pulse bg-gray-50 rounded-[10px]" />
      </div>
    </div>
  );
}
