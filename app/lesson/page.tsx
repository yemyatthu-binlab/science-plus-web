import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/database/queries";

// import { Quiz } from "./quiz";

const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  // const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
    // userSubscriptionData,
  ]);

  if (!lesson || !userProgress) return redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <h1>Test</h1>
  );
};

export default LessonPage;
