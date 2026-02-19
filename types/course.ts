export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  role?: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price?: number;
  rating: number;
  studentCount: number;
  durationInWeeks: number;
  instructor: Instructor;
}

export type CourseCategory =
  | "Web Development"
  | "Data Science"
  | "Design"
  | "Cloud Computing"
  | "Mobile Development"
  | "Security"
  | "Blockchain";
