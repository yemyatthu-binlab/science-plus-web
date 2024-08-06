"use client";

import CourseCard from "@/components/atoms/courses/courseCard";
import { getCourses } from "@/database/queries";
import { courses, courseCategory, userProgress } from "@/database/schema";

type props = {
  courses: (typeof courses.$inferSelect)[];
  activCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const CourseList = ({ courses, activCourseId }: props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((item) => (
        <CourseCard
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          disabled={false}
          onCLick={() => {}}
          active={item.id == activCourseId}
        />
      ))}
    </div>
  );
};
