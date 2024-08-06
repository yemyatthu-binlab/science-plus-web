import { CourseCategoryItem } from "@/components/molecules/courses/courseCategoryItem";
import { CourseList } from "@/components/molecules/courses/courseList";
import { getCourses, getCourseCategories } from "@/database/queries";

const CoursePage = async () => {
  const courseCategoryList = await getCourseCategories();
  // const courseList =
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      {/* <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1> */}
      {courseCategoryList.map((item) => (
        <CourseCategoryItem key={item.id} courseCategory={item} />
      ))}
    </div>
  );
};

export default CoursePage;
