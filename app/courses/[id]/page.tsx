import React from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "@/lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const course = await getCourseById(id);
    return {
      title: `${course.title} | INFNOVA Academy`,
    };
  } catch {
    return {
      title: "Course Not Found | INFNOVA Academy",
    };
  }
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;

  let course;
  try {
    course = await getCourseById(id);
  } catch (error) {
    return notFound();
  }

  return (
    <div className="mx-auto w-[1101px] min-h-screen bg-white border-x border-gray-100 font-inter">
      <Navbar />

      {/* Breadcrumb / Back Link */}
      <div className="px-8 py-4">
        <Link
          href="/courses"
          className="text-sm font-medium text-gray-500 hover:text-gray-800 flex items-center gap-2"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Courses
        </Link>
      </div>

      {/* Hero Section Container (Cloud Engineering Box) */}
      <section className="mx-auto w-[1037px] h-[276px] bg-gradient-to-r from-[#F54900] to-[#FF6900] text-white rounded-[10px] overflow-hidden relative">
        <div className="flex h-full p-8 pr-0">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[#FFD6A8] text-[14px] font-normal uppercase tracking-[0.2px] leading-[20px] mb-4">
                {course.category}
              </span>
              <h1 className="text-[32px] font-bold leading-tight mb-2">
                {course.title}
              </h1>
              <p className="text-[14px] opacity-90 max-w-[500px] line-clamp-3">
                {course.description}
              </p>
            </div>

            <div className="flex items-center gap-6 text-[14px] font-medium opacity-90">
              <div className="flex items-center gap-2">
                <Image
                  src="/icon.png"
                  alt="check"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                Instructor: {course.instructor}
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icon.png"
                  alt="check"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icon.png"
                  alt="check"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                {course.enrolled.toLocaleString()} enrolled
              </div>
            </div>

            <div className="w-[150.87px] h-[32.5px] bg-[#DBEAFE] text-[#1E40AF] flex items-center justify-center rounded-full text-[14px] font-semibold">
              {course.level} Level
            </div>
          </div>

          <div className="relative w-[324.34px] h-[215.68px] my-auto mr-8">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover rounded-[10px]"
              unoptimized={course.thumbnail.includes("unsplash")}
            />
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="px-8 py-12 flex gap-12 items-start">
        <div className="flex-1 space-y-8">
          {/* What You'll Learn */}
          <div className="bg-white rounded-[10px] p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <svg
                className="h-6 w-6 text-[#F54900]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {course.skills?.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <Image src="/icon.png" alt="check" width={16} height={16} />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-[10px] p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Course Description</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
              {course.description?.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Instructor */}
          <div className="bg-white rounded-[10px] p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Your Instructor</h2>
            <div className="flex items-start gap-6">
              <div className="h-[100px] w-[100px] rounded-full bg-orange-600 flex items-center justify-center text-white text-3xl font-bold">
                {course.instructor
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {course.instructor}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Expert professional with industry experience. Passionate about
                  teaching and helping students achieve their career goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Enroll Today) */}
        <aside className="w-[324.34px] h-[490px] sticky top-28 bg-white rounded-[10px] p-6 border border-gray-100 shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A] space-y-6">
          <div>
            <h3 className="text-[20px] font-bold text-[#101828] mb-1">
              Enroll Today
            </h3>
            <p className="text-sm text-gray-500 font-inter">
              Join {course.enrolled.toLocaleString()} students already enrolled
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full h-[40px] bg-[#F54900] text-white rounded-[10px] font-medium text-[16px] leading-[24px] tracking-[-0.31px] text-center hover:bg-[#d43f00] transition-colors">
              Enroll Now
            </button>
            <button className="w-full h-[40px] border border-[#F54900] text-[#F54900] rounded-[10px] font-medium text-[16px] leading-[24px] tracking-[-0.31px] text-center hover:bg-orange-50 transition-colors">
              Add to Wishlist
            </button>
          </div>

          <div className="pt-6 border-t border-gray-100 space-y-4">
            <h4 className="font-bold text-[#101828] text-[15px]">
              This course includes:
            </h4>
            <div className="space-y-3">
              {[
                `${course.duration} of content`,
                "Lifetime access",
                "Certificate of completion",
                "Access on mobile and desktop",
                "Downloadable resources",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <Image src="/Icon.png" alt="check" width={14} height={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
