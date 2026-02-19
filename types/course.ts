export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  bio?: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  longDescription?: string;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price?: number;
  rating: number;
  studentCount: number;
  durationInWeeks: number;
  instructor: Instructor;
  learningPoints?: string[];
}

export type CourseCategory =
  | "Web Development"
  | "Data Science"
  | "Design"
  | "Cloud Computing"
  | "Mobile Development"
  | "Security"
  | "Blockchain";
