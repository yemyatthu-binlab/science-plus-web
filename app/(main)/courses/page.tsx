import { CourseCategoryItem } from "@/components/molecules/courses/courseCategoryItem";
import { CourseList } from "@/components/molecules/courses/courseList";
import {
  getCourses,
  getCourseCategories,
  getUserProgress,
} from "@/database/queries";

const CoursePage = async () => {
  const courseCategoryList = await getCourseCategories();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      {courseCategoryList.map((item) => (
        <CourseCategoryItem key={item.id} courseCategory={item} />
      ))}
    </div>
  );
};

export default CoursePage;
