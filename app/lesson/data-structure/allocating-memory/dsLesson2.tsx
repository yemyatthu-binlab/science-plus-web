"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import AllocatingMemoryIntro from "@/components/molecules/lessons/ds_course/ls2/allocatingMemoryIntro";
import Ls2Review from "@/components/molecules/lessons/ds_course/ls2/ls2Review";
import MemoryAddress from "@/components/molecules/lessons/ds_course/ls2/memoryAddress";
import Pointer from "@/components/molecules/lessons/ds_course/ls2/pointers";
import {
  useLessonActions,
  useLessonChallenge,
} from "@/store/useLessonChallenge";
import { LessonChallenge } from "@/type";
import { useEffect, useState } from "react";

type LessonProps = LessonChallenge;

const numberOfSection = 5;

const AllocatingMemory = (props: LessonProps) => {
  const [progress, setProgress] = useState(1);
  const { setLessonChallenge } = useLessonActions();
  const { initialHearts } = useLessonChallenge();

  useEffect(() => {
    if (props.initialLessonChallenges) {
      console.log("props::", props);
      setLessonChallenge(props);
    }
  }, [props, setLessonChallenge]);

  const handleClick = () => {
    if (typeof window == "undefined") return;
    setProgress(progress + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

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
        {progress == 1 && <AllocatingMemoryIntro handleClick={handleClick} />}
        {progress == 2 && <MemoryAddress handleClick={handleClick} />}
        {progress == 3 && <Pointer handleClick={handleClick} />}
        {progress == 4 && <Ls2Review />}
      </div>
    </div>
  );
};

export default AllocatingMemory;
