import ChoiceSelectionBox from "@/components/atoms/common/choiceSelectionBox";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Terminal from "@/components/atoms/lessons/llm/ls1/terminal";
import { useLessonChallenge } from "@/store/useLessonChallenge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LLMIntro = () => {
  const [lessonSegment, setLessonSegment] = useState(1);
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(true);
  const [quesAState, setQuestA] = useState(quesADefaultState);
  const router = useRouter();
  const { initialLessonChallenges: challenges } = useLessonChallenge();

  useEffect(() => {
    console.log("lesson::", challenges);

    if (lessonSegment == 2) {
      setShowSectionSwitchBtn(quesAState.isAnswered);
    }
  }, [quesAState, lessonSegment, challenges]);

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
          <ThemeText className="mt-10">
            The corpus determines the language model&apos;s vocabulary and what
            words it can generate.
          </ThemeText>
          <ThemeText className="mt-5">
            Did you get an “input error” during your testing?
          </ThemeText>
          <ThemeText className="mt-5">
            That&apos;s because the word you used in the prompt doesn&apos;t
            exist in the corpus.
          </ThemeText>
          <Image
            src={"/llm_intro_1.png"}
            alt={"llm intro"}
            height={"270"}
            width={"540"}
            className="mx-auto mt-10"
          />
          <ThemeText className="mt-5">
            If you give this model a word it didn&apos;t see during the training
            process, it won&apos;t be able to suggest what word will come next
            because it&apos;s not storing any information about that word. This
            model only knows about words in its corpus.
          </ThemeText>
          <Image
            src={"/llm_intro_2.png"}
            alt={"llm intro"}
            height={"270"}
            width={"540"}
            className="mx-auto mt-10"
          />
          <ThemeText className="mt-10">
            For large language models, the corpus is usually a combination of
            texts from different sources such as chat rooms, Wikipedia, novels,
            and more.
          </ThemeText>
          <ThemeText className="mt-5">
            Smaller language models might have just one type of text, like
            emails or Pablo Neruda poems.
          </ThemeText>
          <ThemeText className="mt-10">
            We&apos;ll be interacting with language models like this one
            throughout the course, but yo&apos;ve probably already interacted
            with one.
          </ThemeText>
          <MultipleChoice
            questionList={questionA}
            questionState={quesAState}
            title="Which of the following relies on a language model?"
            setQuestionState={setQuestA}
            questionUniqueId="#llmIntroQA1"
            challenge={challenges?.[0]}
          />
          {quesAState.isAnswered && (
            <div>
              <ThemeText className="mt-10">
                Chatbots, predictive text, and virtual assistants all use
                language models. Each of these models is built differently, but
                they all turn language into numbers and then back into language.
              </ThemeText>
              <ThemeText className="mt-5">
                Let&apos;s take a look at predictive text as an example.
              </ThemeText>
              <Image
                src={"/llm_intro_3.png"}
                alt={"llm intro"}
                height={"270"}
                width={"540"}
                className="mx-auto mt-10"
              />
              <ThemeText className="mt-5">
                Modern email programs try to predict the next word in a
                sentence. How would you guess they do this?
              </ThemeText>
              <ChoiceSelectionBox
                className="mb-14 grid-cols-1 mt-10"
                strList={[
                  "They have been manually programmed with common sentences.",
                  "They use probability.",
                ]}
                correctAnswer={[2]}
              />
              <ThemeText>That&apos;s right!</ThemeText>
              <ThemeText className="mt-5">
                Language models all involve storing probabilities about which
                words might come next, given the preceding words. They calculate
                these probabilities based on sequences of words in the corpus.
              </ThemeText>
              <ThemeText className="mt-5">
                Next, we&apos;ll look at how to predict one word from another
                using a simple language model called an “N-gram model.”
              </ThemeText>
            </div>
          )}
        </div>
      )}
      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title={lessonSegment == 2 ? "Finish" : "Continue"}
          className="mt-10 relative"
          buttonWrapperStyle="mx-0"
          handleClick={() => {
            lessonSegment < 2
              ? setLessonSegment(lessonSegment + 1)
              : router.push("/learn");
          }}
        />
      )}
    </div>
  );
};

const quesADefaultState = {
  value: "",
  correctAnswer: "4",
  isAnswered: false,
  isCorrect: false,
};

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "Talking to a customer service chatbot",
    value: "1",
  },
  {
    label: "Using predictive text on your phone",
    value: "2",
  },
  {
    label: "Instructing a virtual personal assistant, like Siri or Alexa",
    value: "3",
  },
  {
    label: "All of these",
    value: "4",
  },
];

export default LLMIntro;
