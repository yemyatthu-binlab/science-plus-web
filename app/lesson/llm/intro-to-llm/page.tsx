import { redirect, useRouter } from "next/navigation";

import {
  getLesson,
  getUserProgress,
  getUserSubscription,
  // getUserSubscription,
} from "@/database/queries";

import LLMLesson1 from "./llmLesson1";

type Props = {
  searchParams: {
    id: number;
  };
};

const LessonPage = async ({ searchParams }: Props) => {
  const lesson = await getLesson(searchParams.id);
  const userProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  if (!lesson || !userProgress) return redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <LLMLesson1
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonPage;
