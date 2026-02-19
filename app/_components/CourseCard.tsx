import Link from "next/link";
import React from "react";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link href={`/courses/${course.id}`} className="block">
      <div className="flex w-full select-none flex-col overflow-hidden rounded-[10px] bg-white shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A] transition-transform duration-300 hover:-translate-y-1 sm:w-[329.66px] h-[405px]">
        {/* Thumbnail */}
        <div className="relative h-[200px] w-full overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#101828] backdrop-blur-sm border border-gray-100">
              {course.level}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#F54900]">
            {course.category}
          </span>

          <h3 className="mb-4 line-clamp-2 min-h-[48px] text-[16px] font-bold leading-tight text-[#101828]">
            {course.title}
          </h3>

          <div className="mb-auto">
            <p className="text-[12px] text-gray-500">
              Instructor:{" "}
              <span className="font-semibold text-gray-700">
                {course.instructor.name}
              </span>
            </p>
          </div>

          {/* Footer Info Icons */}
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex items-center gap-1.5 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[12px] font-medium">
                {course.durationInWeeks} weeks
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-[12px] font-medium">
                {course.studentCount.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[#F54900]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-[12px] font-bold text-gray-700">
                {course.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
