"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import NgramModelIntro from "@/components/molecules/lessons/llm_course/ls2/nGramModelIntro";
import {
  useLessonActions,
  useLessonChallenge,
} from "@/store/useLessonChallenge";
import { LessonChallenge } from "@/type";
import { useEffect, useState } from "react";

type LessonProps = LessonChallenge;

const LLMLesson2 = (props: LessonProps) => {
  const [progress, setProgress] = useState(1);
  const { setLessonChallenge } = useLessonActions();
  const { initialHearts } = useLessonChallenge();

  useEffect(() => {
    if (props.initialLessonChallenges) {
      setLessonChallenge(props);
    }
  }, [props, setLessonChallenge]);

  const handleClick = () => {
    if (typeof window == "undefined") return;
    setProgress(progress + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

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
        {progress == 1 && <NgramModelIntro handleClick={handleClick} />}
      </div>
    </div>
  );
};

export default LLMLesson2;
