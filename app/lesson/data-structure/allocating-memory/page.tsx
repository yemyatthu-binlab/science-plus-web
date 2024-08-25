"use client";

import { HeaderProgress } from "@/components/atoms/common/headerProgress";
import AllocatingMemoryIntro from "@/components/molecules/lessons/ds_course/ls2/allocatingMemoryIntro";
import Ls2Review from "@/components/molecules/lessons/ds_course/ls2/ls2Review";
import MemoryAddress from "@/components/molecules/lessons/ds_course/ls2/memoryAddress";
import Pointer from "@/components/molecules/lessons/ds_course/ls2/pointers";
import { useState } from "react";

const AllocatingMemory = () => {
  const [progress, setProgress] = useState(1);
  const numberOfSection = 5;

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
        {progress == 1 && <AllocatingMemoryIntro handleClick={handleClick} />}
        {progress == 2 && <MemoryAddress handleClick={handleClick} />}
        {progress == 3 && <Pointer handleClick={handleClick} />}
        {progress == 4 && <Ls2Review />}
      </div>
    </div>
  );
};

export default AllocatingMemory;
