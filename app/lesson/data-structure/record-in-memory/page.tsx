"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import Ls3Review from "@/components/molecules/lessons/ds_course/ls3/ls3Review";
import ManipulatingPointer from "@/components/molecules/lessons/ds_course/ls3/manipulatingPointer";
import ManipulatingRecord from "@/components/molecules/lessons/ds_course/ls3/manipulatingRecord";
import RecordInMemoryIntro from "@/components/molecules/lessons/ds_course/ls3/recordInMemoryIntro";
import { useState } from "react";

const RecordsInMemory = () => {
  const [progress, setProgress] = useState(1);
  const numberOfSection = 4;

  const handleClick = () => {
    if (typeof window == "undefined") return;
    setProgress(progress + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div>
      <HeaderProgress
        hearts={100}
        percentage={progress * (100 / numberOfSection)}
        hasActiveSubscription={false}
      />
      <div className="max-w-[560px] mx-auto mt-5">
        {progress == 1 && <RecordInMemoryIntro handleClick={handleClick} />}
        {progress == 2 && <ManipulatingPointer handleClick={handleClick} />}
        {progress == 3 && <ManipulatingRecord handleClick={handleClick} />}
        {progress == 4 && <Ls3Review />}
      </div>
    </div>
  );
};

export default RecordsInMemory;
