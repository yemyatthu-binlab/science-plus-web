import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.courseCategory);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.courses);
    await db.delete(schema.challengeOptions);

    const couseCategory = await db
      .insert(schema.courseCategory)
      .values([
        { title: "Computer Science", imageSrc: "" },
        { title: "Applied Computer Science", imageSrc: "" },
      ])
      .returning();

    for (const catg of couseCategory) {
      const courseData =
        catg.title == "Computer Science"
          ? [
              {
                title: "Data Structure & Algorithm",
                imageSrc: "/introToAlgo.png",
                courseCategoryId: catg.id,
              },
            ]
          : [
              {
                title: "How LLM Works",
                imageSrc: "/llmWork.png",
                courseCategoryId: catg.id,
              },
              {
                title: "How Today's Technology Works",
                imageSrc: "/howTechWork.png",
                courseCategoryId: catg.id,
              },
            ];
      const courses = await db
        .insert(schema.courses)
        .values(courseData)
        .returning();
      if (catg.title == "Computer Science") {
        const units = await db
          .insert(schema.units)
          .values([
            {
              courseId: courses[0].id,
              title: "Unit 1",
              description: `Learn the basics of data structure and algorithm`,
              order: 1,
            },
            {
              courseId: courses[0].id,
              title: "Unit 2",
              description: `Learn Popular Data Structure type`,
              order: 2,
            },
          ])
          .returning();

        const lessons = await db
          .insert(schema.lessons)
          .values([
            {
              unitId: units[0].id,
              title: "What are Data Structures",
              order: 1,
            },
            { unitId: units[0].id, title: "Allocating Memory", order: 2 },
            { unitId: units[0].id, title: "Records in Memory", order: 3 },
            { unitId: units[0].id, title: "Pointers to Pointers", order: 4 },
            { unitId: units[0].id, title: "Linked Lists", order: 5 },
            { unitId: units[0].id, title: "Understanding Big O", order: 6 },
            {
              unitId: units[0].id,
              title: "The Mathematics of Big O",
              order: 7,
            },
            { unitId: units[0].id, title: "Run Time", order: 8 },
          ])
          .returning();

        await db.insert(schema.challenges);

        const challenges = await db
          .insert(schema.challenges)
          .values([
            {
              lessonId: lessons[0].id,
              type: "SELECT",
              question: 'Which one of these is "the man"?',
              order: 1,
            },
            {
              lessonId: lessons[0].id,
              type: "SELECT",
              question: 'Which one of these is "the woman"?',
              order: 2,
            },
            {
              lessonId: lessons[0].id,
              type: "SELECT",
              question: 'Which one of these is "the boy"?',
              order: 3,
            },
          ])
          .returning();

        await db.insert(schema.challengeOptions).values([
          {
            challengeId: challenges[0].id,
            correct: true,
            text: "Option A",
            imageSrc: "",
            audioSrc: "",
          },
          {
            challengeId: challenges[0].id,
            correct: false,
            text: "Option B",
            imageSrc: "",
            audioSrc: "",
          },
          {
            challengeId: challenges[0].id,
            correct: false,
            text: "Option C",
            imageSrc: "",
            audioSrc: "",
          },
          {
            challengeId: challenges[0].id,
            correct: false,
            text: "Option D",
            imageSrc: "",
            audioSrc: "",
          },
        ]);
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
