/* eslint-disable react-hooks/exhaustive-deps */
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import RecordPointerDiagram from "@/components/atoms/lessons/ds_course/ls3/recordPointerDiagram";
import RecordPointerDiagram2 from "@/components/atoms/lessons/ds_course/ls3/recordPointerDiagram2";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  handleClick: () => void;
};
const ManipulatingPointer = ({ handleClick: moveToNextSection }: Props) => {
  const [quesAState, setQuestA] = useState(quesADefaultState);
  const [quesBState, setQuestB] = useState(quesBDefaultState);
  const [quesCState, setQuestC] = useState(quesCDefaultState);
  const [lessonSegment, setLessonSegment] = useState(1);
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(false);

  useEffect(() => {
    if (lessonSegment == 1) {
      setShowSectionSwitchBtn(quesAState.isAnswered);
    }
    if (lessonSegment == 2) {
      console.log("bb::", quesBState);

      setShowSectionSwitchBtn(quesBState.isAnswered);
    }
    if (lessonSegment == 3) {
      setShowSectionSwitchBtn(quesCState.isAnswered);
    }
  }, [quesAState, quesBState, quesCState, lessonSegment]);

  useEffect(() => {
    setShowSectionSwitchBtn(false);
  }, [lessonSegment]);

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"} className="mt-5">
        Manipulating Pointer
      </ThemeText>
      <ThemeText className="mt-5">
        A program can update the value of a variable by referring to its name.
      </ThemeText>
      <ThemeText className="mt-5 mb-14">
        Similarly, a program can update a field of a record using a pointer,
        like so:
      </ThemeText>
      <RecordPointerDiagram />
      <ThemeText className="mt-14">
        <HighLightText title="catPosition" /> contains the address of a record
        which contains two fields — <HighLightText title="row" /> and{" "}
        <HighLightText title="column" />. It&apos;s used to store the
        ever-changing whereabouts of a cat on a grid in a new game.
      </ThemeText>
      <div className="flex flex-col items-start">
        <div className="mx-10 mt-10 px-4 py-2 border border-gray-400 rounded-md">
          <ThemeText className="text-sm">
            <b>set</b> {"catPosition->row"} <b>to</b> 2
          </ThemeText>
        </div>
        <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
          <ThemeText className="text-sm">
            <b>set</b> {"catPosition->column"} <b>to</b> 5
          </ThemeText>
        </div>
        <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
          <ThemeText className="text-sm">
            <b>set</b> {"catPosition->row"}
          </ThemeText>
          <ThemeText className="text-sm">
            <b>to</b> {"catPosition->column"} + 1
          </ThemeText>
        </div>
      </div>
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title="After creating the following contact, what's the value of
            new_contact?"
        customHeader={
          <div>
            <ThemeText>
              After this code runs, what will be the value of{" "}
              <HighLightText title="catPosition->row" /> ?
            </ThemeText>
          </div>
        }
        setQuestionState={setQuestA}
        questionUniqueId="#memoryAddressQA1"
      />
      {lessonSegment >= 2 && (
        <div>
          <ThemeText className="mt-5">
            Consider two variables, <HighLightText title="catPosition" /> and
            <HighLightText title="dogPosition" />, which locate the positions of
            a cat and a dog on a game grid.
          </ThemeText>
          <ThemeText className="mt-5">
            The two variables catPosition and dogPosition contain two different
            addresses for two different records, but you don&apos;t know the
            contents:
          </ThemeText>
          <Image
            src={"/memory_manipulation.png"}
            alt={"record in memory intro"}
            height={"412"}
            width={"540"}
            className="mx-auto mt-10"
          />
          <MultipleChoice
            questionList={questionA}
            questionState={quesBState}
            title=""
            customHeader={
              <div>
                <ThemeText>
                  After the given code runs, what will be the value of{" "}
                  <HighLightText title="catPosition→row" />?
                </ThemeText>
              </div>
            }
            setQuestionState={setQuestB}
            questionUniqueId="#memoryAddressQA2"
          />
        </div>
      )}
      {lessonSegment >= 3 && (
        <div>
          <ThemeText className="mt-5">
            Now, suppose instead that variables{" "}
            <HighLightText title="catPosition" /> and{" "}
            <HighLightText title="dogPosition" /> contain the same address in
            memory:
          </ThemeText>
          <Image
            src={"/memory_manipulation_1.png"}
            alt={"record in memory intro"}
            height={"412"}
            width={"540"}
            className="mx-auto mt-10"
          />
          <MultipleChoice
            questionList={questionA}
            questionState={quesCState}
            title=""
            customHeader={
              <div>
                <ThemeText>
                  This is the same code that you just saw, except that
                  <HighLightText title="catPosition" /> and{" "}
                  <HighLightText title="dogPosition" /> contain the same
                  address. What will be the value in{" "}
                  <HighLightText title="catPosition→row" />?
                </ThemeText>
              </div>
            }
            setQuestionState={setQuestC}
            questionUniqueId="#memoryAddressQA3"
          />
          {quesCState.isAnswered && (
            <div>
              <ThemeText className="my-14">
                Note that the same code led us to different answers depending on
                the underlying addresses in memory. This is an example of
                aliasing, and it can lead to surprising outcomes:
              </ThemeText>
              <RecordPointerDiagram2 />
              <ThemeText className="my-10">
                Writing a new value into{" "}
                <HighLightText title="catPosition→row" /> will cause that new
                value to be read out from{" "}
                <HighLightText title="dogPosition→row" />.
              </ThemeText>
              <Image
                src={"/record_in_memory_1.png"}
                alt={"record in memory intro"}
                height={"200"}
                width={"300"}
                className="mx-auto"
              />
            </div>
          )}
        </div>
      )}
      {/* {lessonSegment >= 4 && (
        <div>
          
        </div>
      )} */}

      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title={"Continue"}
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

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "Not Enough Information To Say",
    value: "cant",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "6",
  isAnswered: false,
  isCorrect: false,
};

const quesBDefaultState = {
  value: "",
  correctAnswer: "3",
  isAnswered: false,
  isCorrect: false,
};

const quesCDefaultState = {
  value: "",
  correctAnswer: "6",
  isAnswered: false,
  isCorrect: false,
};

export default ManipulatingPointer;
