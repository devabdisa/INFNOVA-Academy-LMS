export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  thumbnail: string;
  rating: number;
  enrolled: number;
  category: string;
  description?: string;
  skills?: string[];
}

export type CourseCategory =
  | "Web Development"
  | "Data Science"
  | "Design"
  | "Cloud Computing"
  | "Mobile Development"
  | "Security"
  | "Blockchain";
