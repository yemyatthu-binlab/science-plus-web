import ChoiceSelectionBox from "@/components/atoms/common/choiceSelectionBox";
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useState } from "react";

type Props = {
  handleClick: () => void;
};

const MemoryAddress = ({ handleClick }: Props) => {
  const [quesAState, setQuestA] = useState(quesADefaultState);

  return (
    <div className="mx-5 pb-10">
      <Image
        src={"/allocating_memory_1.png"}
        alt={"Allocating Memory"}
        height={"358"}
        width={"540"}
        className="mx-auto"
      />
      <ThemeText variant={"title"} className="mt-5">
        Memory Addresses
      </ThemeText>
      <ThemeText className="mt-5">
        Your computer has a fixed amount of storage. Variables, records, and all
        other data structures live in computer memory so they can be accessed
        later.
      </ThemeText>
      <ThemeText className="mt-5">
        How are data structures stored in computer memory?
      </ThemeText>
      <ThemeText className="mt-14">
        We can think of computer memory as consisting of a sequence of numbered
        locations.
      </ThemeText>
      <div className="rounded-md border border-slate-200 my-5 p-5">
        <ThemeText>
          When we create a new data structure, the computer finds a spot and
          tells us where the new data structure lives — we call that its address
          in memory.
        </ThemeText>
      </div>
      <ThemeText className="mt-14">
        Here&apos;s a record containing contact information:
      </ThemeText>
      <Image
        src={"/allocating_memory_2.png"}
        alt={"Allocating Memory 2"}
        height={"270"}
        width={"540"}
        className="mx-auto my-10"
      />
      <ThemeText className="mb-5">
        What address is this record stored at?
      </ThemeText>
      <ChoiceSelectionBox
        className="mb-14 grid-cols-1"
        strList={[
          "7801",
          "Contact(Ann, 555-1234, friend)",
          "1234",
          "We can't tell",
        ]}
        correctAnswer={1}
      />
      <ThemeText className="mb-5">
        According to the diagram, 7801 represents the address where the record
        is stored.
      </ThemeText>
      <ThemeText>
        The variable <HighLightText title="theContact" /> does not contain our
        new contact — it contains the address at which the contact is stored.
      </ThemeText>
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title="After creating the following contact, what's the value of
            new_contact?"
        customHeader={
          <div>
            <ThemeText>
              After creating the following contact, what&apos;s the value of{" "}
              <HighLightText title="new_contact" /> ?
            </ThemeText>
            <div className="border border-gray-300 p-3 m-10 rounded-md">
              <ThemeText className="text-sm text-gray-600">
                <b>set</b> new_contact <b>to</b> Contact(Don, 555-8998, Dentist)
              </ThemeText>
            </div>
          </div>
        }
        setQuestionState={setQuestA}
        questionUniqueId="#memoryAddressQA1"
      />
      {quesAState.isAnswered && (
        <div>
          <ThemeText className="my-5">
            The actual address at which the contact is stored is arbitrary and
            could be many numbers. It has no use other than to help us find the
            record we created.
          </ThemeText>
          <ThemeText className="my-5">
            For this reason, instead of always referring to a record by its
            address, we use shortcuts.
          </ThemeText>
          <SectionSwitchBtn
            title="Continue"
            className="mt-10 relative"
            buttonWrapperStyle="mx-0"
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "7801",
    value: "7801",
  },
  {
    label: "Contact(Don, 555-8998, Dentist)",
    value: "contact",
  },
  {
    label: "8791",
    value: "8791",
  },
  {
    label: "We can't tell",
    value: "cant",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "cant",
  isAnswered: false,
  isCorrect: false,
};

export default MemoryAddress;
