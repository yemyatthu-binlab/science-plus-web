"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import ArrayExplanation from "@/components/molecules/lessons/ds_course/ls1/arrayExplanation";
import DSIntro from "@/components/molecules/lessons/ds_course/ls1/dsIntro";
import Lesson1Review from "@/components/molecules/lessons/ds_course/ls1/ls1Review";
import RecordExplanation from "@/components/molecules/lessons/ds_course/ls1/recordExplanation";
import WhatIsDs from "@/components/molecules/lessons/ds_course/ls1/whatIsDs";
import { useState } from "react";

const DSLesson = () => {
  const [progress, setProgress] = useState(1);

  const handleClick = () => {
    if (typeof window == "undefined") return;
    setProgress(progress + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const numberOfSection = 5;
  return (
    <div>
      <HeaderProgress
        hearts={100}
        percentage={progress * (100 / numberOfSection)}
        hasActiveSubscription={false}
      />
      <div className="max-w-[560px] mx-auto mt-5">
        {progress == 1 && <DSIntro handleClick={handleClick} />}
        {progress == 2 && <WhatIsDs handleClick={handleClick} />}
        {progress == 3 && <ArrayExplanation handleClick={handleClick} />}
        {progress == 4 && <RecordExplanation handleClick={handleClick} />}
        {progress == 5 && <Lesson1Review />}
      </div>
    </div>
  );
};

export default DSLesson;
