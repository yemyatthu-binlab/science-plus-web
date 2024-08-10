import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.courseCategory);
    await db.delete(schema.userProgress);

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
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
