/* eslint-disable react-hooks/exhaustive-deps */
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  handleClick: () => void;
};

const Pointer = ({ handleClick: moveToNextSection }: Props) => {
  const [quesAState, setQuesAState] = useState(quesADefaultState);
  const [quesBState, setQuesBState] = useState(quesBDefaultState);
  const [quesCState, setQuesCState] = useState(quesCDefaultState);
  const [quesDState, setQuesDState] = useState(quesDDefaultState);
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(false);
  const [lessonSegment, setLessonSegment] = useState(1);

  useEffect(() => {
    if (lessonSegment == 1) {
      setShowSectionSwitchBtn(quesAState.isAnswered);
    }
    if (lessonSegment == 2) {
      setShowSectionSwitchBtn(quesBState.isAnswered);
    }
    if (lessonSegment == 3) {
      setShowSectionSwitchBtn(quesCState.isAnswered && quesDState.isAnswered);
    }
  }, [quesAState, quesBState, quesCState, quesDState]);

  useEffect(() => {
    console.log("lesson seg change::");
    setShowSectionSwitchBtn(false);
  }, [lessonSegment]);

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"} className="mt-5">
        Pointers
      </ThemeText>
      <ThemeText className="mt-5">
        These two diagrams represent the same record in memory — one with
        addresses, and one with arrows:
      </ThemeText>
      <Image
        src={"/allocating_memory_2.png"}
        alt={"Allocating Memory 2"}
        height={"270"}
        width={"540"}
        className="mx-auto my-10"
      />
      <Image
        src={"/allocating_memory_3.png"}
        alt={"Allocating Memory 2"}
        height={"270"}
        width={"540"}
        className="mx-auto my-10"
      />
      <ThemeText className="my-5">
        The actual address 7801 isn&apos;t important — it&apos;s only there to
        locate the data. So, it&apos;s common to represent memory addresses with
        arrows.
      </ThemeText>
      <ThemeText className="my-5">
        For this reason, computer scientists call memory address values
        <b> pointers</b>.
      </ThemeText>
      <ThemeText className="my-5">
        In order to access the contents of the record, we&apos;ll use arrows as
        shorthand.
      </ThemeText>
      <div className="p-3 m-10 border border-gray-300 rounded-md">
        <ThemeText className="text-sm">
          <b>set</b> new_contact <b>to</b> Contact(Don, 555-8998, Dentist)
        </ThemeText>
      </div>
      <ThemeText className="">
        Based on the above code, <HighLightText title="new_contact→name" />{" "}
        corresponds to the value <HighLightText title="Don" />.
      </ThemeText>
      <Image
        src={"/allocating_memory_4.png"}
        alt={"Allocating Memory 2"}
        height={"290"}
        width={"540"}
        className="mx-auto my-10"
      />
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title=""
        customHeader={
          <div>
            <ThemeText>
              What&apos;s <HighLightText title="a→row" /> in this example?
            </ThemeText>
          </div>
        }
        setQuestionState={setQuesAState}
        questionUniqueId="#memoryAddressQA1"
      />
      {quesAState.isAnswered && (
        <ThemeText className="mt-10">
          Evaluating <HighLightText title="a→row " /> takes two steps — locating
          a record at a memory address, and then looking up a field at that
          address, which contains the value 1. 1.
        </ThemeText>
      )}
      {lessonSegment >= 2 && (
        <>
          <ThemeText className="mt-14">
            Memory addresses are just numbers, and it&apos;s possible for them
            to overlap.
          </ThemeText>
          <ThemeText className="mt-5">
            This diagram is almost identical to the last one, but note that the
            variable c has been added:
          </ThemeText>
          <Image
            src={"/allocating_memory_5.png"}
            alt={"Allocating Memory 2"}
            height={"290"}
            width={"540"}
            className="mx-auto my-10"
          />

          <MultipleChoice
            questionList={questionB}
            questionState={quesBState}
            title=""
            customHeader={
              <div>
                <ThemeText>
                  What&apos;s <HighLightText title="c→row + a→column" /> in this
                  example?
                </ThemeText>
              </div>
            }
            setQuestionState={setQuesBState}
            questionUniqueId="#memoryAddressQA2"
          />
          {quesBState.isAnswered && (
            <div className="my-5">
              <ThemeText>
                In the example, we saw that a and c both contained the memory
                address of the same record.
              </ThemeText>
              <div className="border border-gray-300 rounded-md p-5 mt-5">
                <ThemeText>
                  It&apos;s possible for the same memory address to be stored in
                  two different variables. This is called <b>aliasing</b>.
                </ThemeText>
              </div>
            </div>
          )}
        </>
      )}
      {lessonSegment >= 3 && (
        <div>
          <MultipleChoice
            questionList={questionC}
            questionState={quesCState}
            title=""
            customHeader={
              <div>
                <ThemeText>
                  In this diagram, how many aliases are there of the third
                  record, the one containing <b>Jing&apos;s </b>contact
                  information?
                </ThemeText>
                <Image
                  src={"/allocating_memory_6.png"}
                  alt={"Allocating Memory 2"}
                  height={"290"}
                  width={"540"}
                  className="mx-auto my-10"
                />
              </div>
            }
            setQuestionState={setQuesCState}
            questionUniqueId="#memoryAddressQA3"
          />
          {quesCState.isAnswered && (
            <div>
              <ThemeText className="my-10">
                We can use arrows as shorthand in diagrams as well.
              </ThemeText>
              <MultipleChoice
                questionList={questionD}
                questionState={quesDState}
                title=""
                customHeader={
                  <div>
                    <Image
                      src={"/allocating_memory_7.png"}
                      alt={"Allocating Memory 2"}
                      height={"290"}
                      width={"540"}
                      className="mx-auto my-10"
                    />
                    <ThemeText>
                      What is <HighLightText title="b→row + a→column" /> in this
                      diagram?
                    </ThemeText>
                  </div>
                }
                setQuestionState={setQuesDState}
                questionUniqueId="#memoryAddressQA3"
              />
              {quesDState.isAnswered && (
                <ThemeText className="mt-5">
                  We can quickly spot aliasing when it occurs in an arrow-based
                  diagram because two arrows point to the same field.
                </ThemeText>
              )}
            </div>
          )}
        </div>
      )}
      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title={quesDState.isAnswered ? "Review and reflect" : "Continue"}
          className="mt-10 relative"
          buttonWrapperStyle="mx-0"
          handleClick={() => {
            lessonSegment < 3
              ? setLessonSegment(lessonSegment + 1)
              : moveToNextSection();
          }}
        />
      )}
    </div>
  );
};

export default Pointer;

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "8",
    value: "8",
  },
  {
    label: "193",
    value: "193",
  },
];

const questionB: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "7",
    value: "7",
  },
  {
    label: "9",
    value: "9",
  },
  {
    label: "11",
    value: "11",
  },
  {
    label: "14",
    value: "14",
  },
  {
    label: "16",
    value: "16",
  },
];

const questionC: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "0",
    value: "0",
  },
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
];

const questionD: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "7",
    value: "7",
  },
  {
    label: "9",
    value: "9",
  },
  {
    label: "11",
    value: "11",
  },
  {
    label: "14",
    value: "14",
  },
  {
    label: "16",
    value: "16",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "1",
  isAnswered: false,
  isCorrect: false,
};

const quesBDefaultState = {
  value: "",
  correctAnswer: "9",
  isAnswered: false,
  isCorrect: false,
};

const quesCDefaultState = {
  value: "",
  correctAnswer: "3",
  isAnswered: false,
  isCorrect: false,
};

const quesDDefaultState = {
  value: "",
  correctAnswer: "11",
  isAnswered: false,
  isCorrect: false,
};
