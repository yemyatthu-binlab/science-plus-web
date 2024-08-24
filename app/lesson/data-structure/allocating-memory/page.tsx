"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import ArrayExplanation from "@/components/molecules/lessons/ds_course/ls1/arrayExplanation";
import DSIntro from "@/components/molecules/lessons/ds_course/ls1/dsIntro";
import Lesson1Review from "@/components/molecules/lessons/ds_course/ls1/ls1Review";
import RecordExplanation from "@/components/molecules/lessons/ds_course/ls1/recordExplanation";
import WhatIsDs from "@/components/molecules/lessons/ds_course/ls1/whatIsDs";
import AllocatingMemoryIntro from "@/components/molecules/lessons/ds_course/ls2/allocatingMemoryIntro";
import MemoryAddress from "@/components/molecules/lessons/ds_course/ls2/memoryAddress";
import { useState } from "react";

const DSLesson = () => {
  const [progress, setProgress] = useState(1);
  const numberOfSection = 5;
  return (
    <div>
      <HeaderProgress
        hearts={100}
        percentage={progress * (100 / numberOfSection)}
        hasActiveSubscription={false}
      />
      <div className="max-w-[560px] mx-auto mt-5">
        {progress == 1 && (
          <AllocatingMemoryIntro
            handleClick={() => setProgress(progress + 1)}
          />
        )}
        {progress == 2 && (
          <MemoryAddress handleClick={() => setProgress(progress + 1)} />
        )}
        {/* {progress == 3 && (
          <ArrayExplanation handleClick={() => setProgress(progress + 1)} />
        )}
        {progress == 4 && (
          <RecordExplanation handleClick={() => setProgress(progress + 1)} />
        )}
        {progress == 5 && <Lesson1Review />} */}
      </div>
    </div>
  );
};

export default DSLesson;
