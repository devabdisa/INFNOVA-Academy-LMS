import React from "react";
import CourseCard from "../_components/CourseCard";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { Course } from "@/types/course";

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Full Stack Web Development Bootcamp",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.9,
    studentCount: 3124,
    durationInWeeks: 12,
    instructor: { id: "1", name: "Lidetu Tadesse", avatar: "" },
  },
  {
    id: "2",
    title: "Practical Machine Learning",
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
    category: "Data Science",
    level: "Advanced",
    rating: 4.8,
    studentCount: 1742,
    durationInWeeks: 10,
    instructor: { id: "2", name: "Bereket Tesfaye", avatar: "" },
  },
  {
    id: "3",
    title: "UI/UX Design for Modern Products",
    thumbnail:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
    category: "Design",
    level: "Beginner",
    rating: 4.7,
    studentCount: 2691,
    durationInWeeks: 8,
    instructor: { id: "3", name: "Hana Alemayehu", avatar: "" },
  },
  {
    id: "4",
    title: "Cloud Engineering with AWS",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    category: "Cloud Computing",
    level: "Intermediate",
    rating: 4.6,
    studentCount: 2015,
    durationInWeeks: 9,
    instructor: { id: "4", name: "Samuel Getachew", avatar: "" },
  },
  {
    id: "5",
    title: "Mobile App Development with Flutter",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    category: "Mobile Development",
    level: "Intermediate",
    rating: 4.9,
    studentCount: 2583,
    durationInWeeks: 10,
    instructor: { id: "5", name: "Natnael Desta", avatar: "" },
  },
  {
    id: "6",
    title: "Cybersecurity Foundations",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    category: "Security",
    level: "Beginner",
    rating: 4.7,
    studentCount: 1489,
    durationInWeeks: 8,
    instructor: { id: "6", name: "Meklit Girma", avatar: "" },
  },
  {
    id: "7",
    title: "Data Analytics with Python",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
    category: "Data Science",
    level: "Beginner",
    rating: 4.8,
    studentCount: 2874,
    durationInWeeks: 7,
    instructor: { id: "7", name: "Abel Hailu", avatar: "" },
  },
  {
    id: "8",
    title: "Blockchain & Fintech Systems",
    thumbnail:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    category: "Blockchain",
    level: "Advanced",
    rating: 4.5,
    studentCount: 1321,
    durationInWeeks: 11,
    instructor: { id: "8", name: "Yonas Bekele", avatar: "" },
  },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto w-[1101px] min-h-[2234px] bg-gray-50 border-x border-gray-100">
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
      <section className="py-12 w-full px-8">
        <div className="w-full">
          <p className="mb-8 text-sm font-medium text-gray-500">
            Showing {mockCourses.length} of {mockCourses.length} courses
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
