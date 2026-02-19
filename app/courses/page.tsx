import React from "react";
import CourseCard from "../_components/CourseCard";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { getCourses } from "@/lib/api";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="mx-auto w-[1101px] min-h-[2234px] bg-gray-50 border-x border-gray-100 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F54900] to-[#FF6900] py-16 text-white w-full px-8">
        <div className="w-full">
          <h1 className="mb-4 text-[48px] font-bold leading-tight">
            Explore Our Courses
          </h1>
          <p className="max-w-[560px] text-lg opacity-90">
            Master new skills with expert-led courses designed for the modern
            learner. Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-6 shadow-sm w-full px-8">
        <div className="flex w-full items-center gap-4">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search courses, instructors..."
              className="w-full rounded-md border border-gray-200 py-3 pl-12 pr-4 text-sm focus:border-[#F54900] focus:outline-none"
            />
          </div>
          <div className="h-11 w-40 rounded-md border border-gray-200 bg-white shadow-sm"></div>
          <div className="h-11 w-40 rounded-md border border-gray-200 bg-white shadow-sm"></div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12 w-full px-8 flex-1">
        <div className="w-full">
          <p className="mb-8 text-sm font-medium text-gray-500">
            Showing {courses.length} of {courses.length} courses
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
