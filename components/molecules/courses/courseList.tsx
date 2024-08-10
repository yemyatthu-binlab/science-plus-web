"use client";

import { upsertUserProgress } from "@/actions/user-progress";
import CourseCard from "@/components/atoms/courses/courseCard";
import { getCourses } from "@/database/queries";
import { courses, courseCategory, userProgress } from "@/database/schema";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { start } from "repl";
import { toast, Toaster } from "sonner";

type props = {
  courses: (typeof courses.$inferSelect)[];
  activCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const CourseList = ({ courses, activCourseId }: props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    console.log("id::", id);
    if (pending) return;
    if (id === activCourseId) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((item) => (
        <CourseCard
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          disabled={pending}
          onCLick={onClick}
          active={item.id == activCourseId}
        />
      ))}
    </div>
  );
};
