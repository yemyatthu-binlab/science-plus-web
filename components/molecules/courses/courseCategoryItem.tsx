import { getCourses, getUserProgress } from "@/database/queries";
import { courseCategory, courses } from "@/database/schema";
import { CourseList } from "./courseList";

type props = {
  courseCategory: typeof courseCategory.$inferSelect;
};

export const CourseCategoryItem = async ({ courseCategory }: props) => {
  const courses = await getCourses(courseCategory.id);
  const userProgress = await getUserProgress();
  return (
    <div className="my-10">
      <p className="font-bold text-xl">{courseCategory.title}</p>
      <CourseList
        courses={courses}
        activCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};
