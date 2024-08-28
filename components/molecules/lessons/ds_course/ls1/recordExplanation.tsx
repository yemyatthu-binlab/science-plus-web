import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import { useLessonChallenge } from "@/store/useLessonChallenge";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  handleClick: () => void;
};

const RecordExplanation = ({ handleClick: moveToNextSection }: Props) => {
  const [quesAState, setQuesAState] = useState(quesADefaultState);
  const [quesBState, setQuesBState] = useState(quesBDefaultState);
  const { initialLessonChallenges: challenges } = useLessonChallenge();
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(false);
  const [lessonSegment, setLessonSegment] = useState(1);

  useEffect(() => {
    if (lessonSegment == 1) {
      setShowSectionSwitchBtn(quesAState.isAnswered);
    }
    if (lessonSegment == 2) {
      setShowSectionSwitchBtn(quesBState.isAnswered);
    }
  }, [quesAState, quesBState]);

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"}>Records</ThemeText>
      <ThemeText className="my-5">
        Suppose that a contact list on a phone should include information about
        the name, phone, and relationship of each contact:
      </ThemeText>
      <Image
        src={"/record_explanation.png"}
        alt={"Array Explanation"}
        height={"176"}
        width={"540"}
      />
      <div className="border border-slate-200 rounded-md p-6 mt-5">
        <ThemeText className="text-sm">
          A <b>record</b> is a way of grouping pieces of information, or{" "}
          <b>fields</b>, together.
        </ThemeText>
      </div>
      <ThemeText className="mt-5">
        The record <HighLightText title="Contact" /> contains fields{" "}
        <HighLightText title="name" /> ,
        <HighLightText title="phone" /> , and{" "}
        <HighLightText title="relationship" />
      </ThemeText>
      <Image
        src={"/course-record_explanation2.png"}
        alt={"Record Explanation"}
        height={"176"}
        width={"540"}
        className="mt-5"
      />
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title="What's Bea's relationship in this contact list?"
        setQuestionState={setQuesAState}
        questionUniqueId="#recordQA1"
        challenge={challenges?.[2]}
      />
      {lessonSegment >= 2 && (
        <>
          <ThemeText className="mt-10">
            Consider another program that creates drawings based on information
            about a circle to be drawn on a grid:
          </ThemeText>

          <Image
            src={"/array_explanation3.png"}
            alt={"Record Explanation"}
            height={"176"}
            width={"540"}
            className="mt-5"
          />
          <ThemeText className="mt-3">
            We want to create a record to represent a{" "}
            <span className="bg-gray-200 p-1 text-sm rounded-sm py-1 px-2 leading-7 ">
              Circle
            </span>
            .
          </ThemeText>

          <MultipleChoice
            questionList={questionB}
            questionState={quesBState}
            title="Which of these could not be a field of the record Circle?"
            setQuestionState={setQuesBState}
            questionUniqueId="#recordQA2"
            challenge={challenges?.[3]}
          />

          {quesBState.isAnswered && (
            <ThemeText className="mt-10">
              We&apos;ve seen how records can store data in different contexts.
              To organize and manipulate records, we&apos;ll need to investigate
              how they&apos;re stored in computer memory.
            </ThemeText>
          )}
        </>
      )}
      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title="Continue"
          className="mt-10 relative"
          buttonWrapperStyle="mx-0"
          handleClick={() => {
            lessonSegment < 2
              ? setLessonSegment(lessonSegment + 1)
              : moveToNextSection();
          }}
        />
      )}
    </div>
  );
};

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "Coworker",
    value: "coworker",
  },
  {
    label: "Family",
    value: "family",
  },
  {
    label: "Dentist",
    value: "dentist",
  },
  {
    label: "Impossible to tell",
    value: "impossible",
  },
];

const questionB: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "Color",
    value: "color",
  },
  {
    label: "Location",
    value: "location",
  },
  {
    label: "Total number of points",
    value: "points",
  },
  {
    label: "Size",
    value: "size",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "family",
  isAnswered: false,
  isCorrect: false,
};

const quesBDefaultState = {
  value: "",
  correctAnswer: "points",
  isAnswered: false,
  isCorrect: false,
};

export default RecordExplanation;
