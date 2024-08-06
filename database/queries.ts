import { cache } from "react";
import db from "./drizzle";
import { courseCategory, courses, userProgress } from "./schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export const getCourses = cache(async (catgId: number) => {
  // const data = await db.query.courses.findMany({
  //   with: {
  //     courseCategoryId: catgId,
  //   },
  // });
  const data = await db
    .select()
    .from(courses)
    .where(eq(courses.courseCategoryId, catgId));
  return data;
});

export const getCourseCategories = cache(async () => {
  const data = await db.query.courseCategory.findMany();
  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: { activeCourse: true },
  });

  return data;
});
