import { Course } from "@/types/course";

const API_BASE_URL = "https://infnova-course-api.vercel.app/api";

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${API_BASE_URL}/courses`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export async function getCourseById(id: string): Promise<Course> {
  const res = await fetch(`${API_BASE_URL}/courses/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Course not found");
    }
    throw new Error("Failed to fetch course details");
  }

  return res.json();
}
