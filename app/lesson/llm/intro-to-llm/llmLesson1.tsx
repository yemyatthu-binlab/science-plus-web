"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import ThemeText from "@/components/atoms/common/themeText";
import LLMIntro from "@/components/molecules/lessons/llm_course/ls1/llmIntro";
import {
  useLessonActions,
  useLessonChallenge,
} from "@/store/useLessonChallenge";
import { LessonChallenge } from "@/type";
import { useEffect, useState } from "react";

type LessonProps = LessonChallenge;

const LLMLesson1 = (props: LessonProps) => {
  const [progress, setProgress] = useState(1);
  const { setLessonChallenge } = useLessonActions();
  const { initialHearts } = useLessonChallenge();

  useEffect(() => {
    if (props.initialLessonChallenges) {
      setLessonChallenge(props);
    }
  }, [props, setLessonChallenge]);

  const numberOfSection = 1;
  return (
    <div>
      {initialHearts !== undefined && (
        <HeaderProgress
          hearts={initialHearts}
          percentage={progress * (100 / numberOfSection)}
          hasActiveSubscription={!!props.userSubscription?.isActive}
        />
      )}
      <div className="max-w-[560px] mx-auto mt-5">
        {progress == 1 && <LLMIntro />}
      </div>
    </div>
  );
};

export default LLMLesson1;
