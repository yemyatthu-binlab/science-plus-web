import { redirect } from "next/navigation";

import {
  getLesson,
  getUserProgress,
  getUserSubscription,
  // getUserSubscription,
} from "@/database/queries";

import DSLesson1 from "./dsLesson1";

const LessonPage = async () => {
  const lesson = await getLesson();
  const userProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  if (!lesson || !userProgress) return redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <DSLesson1
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonPage;
