import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useState } from "react";

type Props = {
  handleClick: () => void;
};

const RecordExplanation = ({ handleClick }: Props) => {
  const [quesAState, setQuesAState] = useState(quesADefaultState);
  const [quesBState, setQuesBState] = useState(quesBDefaultState);

  const handleQA1AnsChange = (value: string) => {
    if (!quesAState.isAnswered) {
      setQuesAState((qaVal) => ({ ...qaVal, value }));
    }
  };

  const handleQA1AnsSubmit = () => {
    if (quesAState.value) {
      setQuesAState((prev) => ({
        ...prev,
        isAnswered: true,
        isCorrect: prev.correctAnswer == prev.value,
      }));
    }
  };

  const handleQBAnsChange = (value: string) => {
    if (!quesBState.isAnswered) {
      setQuesBState((qaVal) => ({ ...qaVal, value }));
    }
  };

  const handleQBAnsSubmit = () => {
    if (quesBState.value) {
      setQuesBState((prev) => ({
        ...prev,
        isAnswered: true,
        isCorrect: prev.correctAnswer == prev.value,
      }));
    }
  };

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
        The record{" "}
        <span className="bg-gray-200 p-1 text-sm rounded-sm py-1 px-2 leading-7 ">
          Contact
        </span>{" "}
        contains fields{" "}
        <span className="bg-gray-200 p-1 text-sm rounded-sm py-1 px-2 leading-7 ">
          name
        </span>
        ,{" "}
        <span className="bg-gray-200 p-1 text-sm rounded-sm py-1 px-2 leading-7 ">
          phone
        </span>
        , and{" "}
        <span className="bg-gray-200 p-1 text-sm rounded-sm py-1 px-2 leading-7 ">
          relationship
        </span>
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
        title="Where would you find Bea's phone number?"
        handleAnswerChange={handleQA1AnsChange}
        handleSubmit={handleQA1AnsSubmit}
        questionUniqueId="#recordQA1"
      />
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
        title="Where would you find Bea's phone number?"
        handleAnswerChange={handleQBAnsChange}
        handleSubmit={handleQBAnsSubmit}
        questionUniqueId="#recordQA2"
      />

      <ThemeText className="mt-10">
        We've seen how records can store data in different contexts. To organize
        and manipulate records, we'll need to investigate how they're stored in
        computer memory.
      </ThemeText>

      <SectionSwitchBtn
        title="Review and reflect"
        className="mt-10 relative"
        buttonWrapperStyle="mx-0"
        handleClick={handleClick}
      />
    </div>
  );
};

const questionA: SciencePlus.Question[] = [
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

const questionB: SciencePlus.Question[] = [
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
