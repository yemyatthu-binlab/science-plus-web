import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Terminal from "@/components/atoms/lessons/llm/ls1/terminal";
import Image from "next/image";
import { useEffect, useState } from "react";

const LLMIntro = () => {
  const [lessonSegment, setLessonSegment] = useState(1);
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(true);

  useEffect(() => {
    setShowSectionSwitchBtn(lessonSegment == 1 ? true : false);
  }, [lessonSegment]);

  return (
    <div className="mx-5 pb-10">
      <Image
        src={"/llm_intro.png"}
        alt={"llm intro"}
        height={"270"}
        width={"540"}
        className="mx-auto mt-3"
      />
      <ThemeText variant={"title"} className="mt-14">
        Intro to Language Models
      </ThemeText>
      <ThemeText className="mt-5">
        Lately, it seems like language models, ChatGPT, and artificial
        intelligence (AI) are everywhere. Understanding what&apos;s happening
        “under the hood” of Large Language Models (LLMs) will be key to
        navigating the digital world. Let&apos;s get started!
      </ThemeText>
      {lessonSegment == 2 && (
        <div>
          <ThemeText className="mt-14">
            Start by typing a word in the prompt and hitting submit. You can try
            new prompts and regenerate responses as many times as you like.
          </ThemeText>
          <Terminal />
        </div>
      )}
      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title={lessonSegment >= 5 ? "Review and reflect" : "Continue"}
          className="mt-10 relative"
          buttonWrapperStyle="mx-0"
          handleClick={() => {
            lessonSegment < 5 ? setLessonSegment(lessonSegment + 1) : () => {};
          }}
        />
      )}
    </div>
  );
};

export default LLMIntro;
