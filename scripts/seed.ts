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

    const cousrCategory = await db
      .insert(schema.courseCategory)
      .values([
        { title: "Computer Science", imageSrc: "" },
        { title: "Applied Computer Science", imageSrc: "" },
      ])
      .returning();

    const courses = await db
      .insert(schema.courses)
      .values([
        {
          title: "Data Structure & Algorithm",
          imageSrc: "introToAlgo.png",
          courseCategoryId: 1,
        },
        {
          title: "How LLM Works",
          imageSrc: "llmWork.png",
          courseCategoryId: 2,
        },
        {
          title: "How Today's Technology Works",
          imageSrc: "howTechWork.png",
          courseCategoryId: 2,
        },
      ])
      .returning();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
