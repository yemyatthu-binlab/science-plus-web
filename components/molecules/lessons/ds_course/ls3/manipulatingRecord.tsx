import DragAndDrop from "@/components/atoms/common/dragAndDrop";
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  handleClick: () => void;
};

const ManipulatingRecord = ({ handleClick: moveToNextSection }: Props) => {
  const [quesAState, setQuestA] = useState(quesADefaultState);
  const [quesBState, setQuestB] = useState(quesBDefaultState);
  const [quesCState, setQuestC] = useState(quesCDefaultState);
  const [quesDState, setQuestD] = useState(quesDDefaultState);
  const [quesEState, setQuestE] = useState(quesEDefaultState);
  const [lessonSegment, setLessonSegment] = useState(1);
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(false);

  useEffect(() => {
    if (lessonSegment == 1) {
      setShowSectionSwitchBtn(quesAState.isAnswered);
    }
    if (lessonSegment == 2) {
      setShowSectionSwitchBtn(quesBState.isAnswered);
    }
    if (lessonSegment == 3) {
      setShowSectionSwitchBtn(quesCState.isAnswered);
    }
    if (lessonSegment == 4) {
      setShowSectionSwitchBtn(quesDState.isAnswered);
    }
    if (lessonSegment == 5) {
      setShowSectionSwitchBtn(quesEState.isAnswered);
    }
  }, [
    quesAState,
    quesBState,
    quesCState,
    quesEState,
    quesDState,
    lessonSegment,
  ]);

  useEffect(() => {
    setShowSectionSwitchBtn(false);
  }, [lessonSegment]);

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"} className="mt-5">
        Manipulating Records
      </ThemeText>
      <Image
        src={"/manipulating_record_1.png"}
        alt={"record in memory intro"}
        height={"412"}
        width={"540"}
        className="mx-auto mt-10"
      />
      <ThemeText className="my-10">
        Let&apos;s return to our contact list.
      </ThemeText>
      <ThemeText className="my-10">
        The contacts for Ann and Don are represented by variables as in the
        diagram:
      </ThemeText>
      <Image
        src={"/manipulating_record_2.png"}
        alt={"record in memory"}
        height={"240"}
        width={"540"}
        className="mx-auto mt-10"
      />
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title=""
        customHeader={
          <div>
            <ThemeText>
              What will happen when, starting in the world above, you run this
              command?
            </ThemeText>
            <div className="m-10 border border-gray-400 rounded-md p-4">
              <ThemeText className="text-sm">
                {" "}
                <b>set</b> y <b>to</b> Contact(Bea, 555-1122, Doctor)
              </ThemeText>
            </div>
          </div>
        }
        setQuestionState={setQuestA}
        questionUniqueId="#recordInMemQA1"
      />
      {lessonSegment >= 2 && (
        <div>
          <ThemeText className="my-10">
            {" "}
            In the exercises below, we&apos;ll predict the result of each
            program — specifically, the output of the{" "}
            <HighLightText title="announce" /> function.
          </ThemeText>
          <ThemeText className="mb-5">
            This program creates two records and then calls announce:
          </ThemeText>
          <div className="flex flex-col items-start">
            <div className="mx-10 mt-10 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> A <b>to</b> Contact(Ann, 555-2345, Friend)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> B <b>to</b> Contact(Bea, 555-1122, Doctor)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> A→name
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> B→name
              </ThemeText>
            </div>
          </div>
          <MultipleChoice
            questionList={questionB}
            questionState={quesBState}
            title="What gets announced in the program above?"
            setQuestionState={setQuestB}
            questionUniqueId="#recordInMemoryQA2"
          />
        </div>
      )}
      {lessonSegment >= 3 && (
        <div>
          <ThemeText className="mt-10 mb-5">
            This program is similar but includes a new command set B to A:
          </ThemeText>
          <div className="flex flex-col items-start">
            <div className="mx-10 mt-10 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> A <b>to</b> Contact(Ann, 555-2345, Friend)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> B <b>to</b> Contact(Bea, 555-1122, Doctor)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> B <b>to</b> A
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> A→name
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> B→name
              </ThemeText>
            </div>
          </div>
          <MultipleChoice
            questionList={questionC}
            questionState={quesCState}
            title="What gets announced in the program above?"
            setQuestionState={setQuestC}
            questionUniqueId="#recordInMemoryAQ3"
          />
        </div>
      )}
      {lessonSegment >= 4 && (
        <div>
          <ThemeText className="my-10">
            The order of commands is key. In the previous example, after{" "}
            <HighLightText
              title="set B
            to A"
            />{" "}
            is called, our new diagram of memory looks like this:
          </ThemeText>
          <Image
            src={"/manipulating_record_3.png"}
            alt={"record in memory"}
            height={"280"}
            width={"540"}
            className="mx-auto mb-10"
          />
          <ThemeText>
            Let&apos;s see what happens when we have multiple calls to{" "}
            <HighLightText title="set" />:
          </ThemeText>
          <div className="flex flex-col items-start mt-5 mb-10">
            <div className="mx-10 mt-10 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> A <b>to</b> Contact(Ann, 555-2345, Friend)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> B <b>to</b> Contact(Bea, 555-1122, Doctor)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> A <b>to</b> B
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> B <b>to</b> A
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> A→name
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> B→name
              </ThemeText>
            </div>
          </div>
          <MultipleChoice
            questionList={questionC}
            questionState={quesDState}
            title="What gets announced in the program above?"
            setQuestionState={setQuestD}
            questionUniqueId="#recordInMemoryQA4"
          />
        </div>
      )}
      {lessonSegment >= 5 && (
        <div>
          <ThemeText className="my-10">
            Let&apos;s put it all together. In this program, both records and
            fields are updated:
          </ThemeText>
          <div className="flex flex-col items-start mt-5 mb-10">
            <div className="mx-10 mt-10 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> A <b>to</b> Contact(Ann, 555-2345, Friend)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> B <b>to</b> Contact(Bea, 555-1122, Doctor)
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> C <b>to</b> B
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>set</b> C→name <b>to</b> A→name
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> A→name
              </ThemeText>
            </div>
            <div className="mx-10 mt-3 px-4 py-2 flex flex-col border border-gray-400 rounded-md">
              <ThemeText className="text-sm">
                <b>announce</b> B→name
              </ThemeText>
            </div>
          </div>
          <MultipleChoice
            questionList={questionC}
            questionState={quesEState}
            title="What gets announced in the program above?"
            setQuestionState={setQuestE}
            questionUniqueId="#recordInMemoryQA5"
          />
        </div>
      )}
      {quesEState.isAnswered && (
        <div>
          <ThemeText className="my-10">
            Now for a challenge: writing your own program. Consider the
            following picture of memory:
          </ThemeText>
          <Image
            src={"/manipulating_record_5.png"}
            alt={"record in memory challenge 6"}
            height={"280"}
            width={"540"}
            className="mx-auto mb-10"
          />
          <ThemeText className="my-4">
            Arrange the commands so that Ann&napos;s and Bea&apos;s names are
            switched. In other words, <HighLightText title="A→name" /> is set to
            Bea and <HighLightText title="B→name" /> is set to Ann.
          </ThemeText>
          <ThemeText className="mb-5">
            You don&apos;t have to use all of the commands.
          </ThemeText>
          <DragAndDrop />
          <ThemeText className="mt-10">
            When setting and resetting records in memory, it helps to consider
            what the underlying picture looks like in memory.
          </ThemeText>
        </div>
      )}
      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title={lessonSegment >= 5 ? "Review and reflect" : "Continue"}
          className="mt-10 relative"
          buttonWrapperStyle="mx-0"
          handleClick={() => {
            lessonSegment < 5
              ? setLessonSegment(lessonSegment + 1)
              : moveToNextSection();
          }}
        />
      )}
    </div>
  );
};

export default ManipulatingRecord;

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "There will be arrows pointing to Don's and Ann's records.",
    value: "1",
  },
  {
    label: "There will be arrows pointing to Don's and Bea's records.",
    value: "2",
  },
  {
    label: "There will be arrows pointing to Bea's and Ann's records",
    value: "3",
  },
  {
    label: "There will be arrows pointing to all three records.",
    value: "4",
  },
];

const questionB: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "First A, then B",
    value: "1",
  },
  {
    label: "First Ann, then Bea",
    value: "2",
  },
  {
    label: "First Bea, then Ann",
    value: "3",
  },
  {
    label: "First Bea, then Bea again",
    value: "4",
  },
];

const questionC: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "First Ann, then Bea",
    value: "1",
  },
  {
    label: "First Bea, then Ann",
    value: "2",
  },
  {
    label: "First Ann, then Ann again",
    value: "3",
  },
  {
    label: "First Bea, then Bea again",
    value: "4",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "2",
  isAnswered: false,
  isCorrect: false,
};

const quesBDefaultState = {
  value: "",
  correctAnswer: "2",
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
  correctAnswer: "4",
  isAnswered: false,
  isCorrect: false,
};

const quesEDefaultState = {
  value: "",
  correctAnswer: "3",
  isAnswered: false,
  isCorrect: false,
};
