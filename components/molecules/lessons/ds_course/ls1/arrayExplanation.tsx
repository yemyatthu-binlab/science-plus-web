import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";
import { FormEvent, useState } from "react";

type Props = {
  handleClick: () => void;
};

const qurstionA: SciencePlus.Question[] = [
  {
    label: "Name[0]",
    value: "Name[0]",
  },
  {
    label: "Name[1]",
    value: "Name[1]",
  },
  {
    label: "Bea[0]",
    value: "Bea[0]",
  },
  {
    label: "Phone[1]",
    value: "Phone[1]",
  },
];

const ArrayExplanation = ({ handleClick }: Props) => {
  const [qa1, setQa1] = useState({
    value: "",
    correctAnswer: "-2",
    isAnswered: false,
    isCorrect: false,
  });

  const [qa2, setQa2] = useState({
    value: "",
    correctAnswer: "Phone[1]",
    isAnswered: false,
    isCorrect: false,
  });

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"}>Arrays</ThemeText>
      <ThemeText className="my-5">
        An example of a data structure is an array, a sequence of locations that
        can store values:
      </ThemeText>
      <Image
        src={"/array_explanation.png"}
        alt={"Array Explanation"}
        height={"250"}
        width={"460"}
      />
      <Image
        src={"/array_explanation2.png"}
        alt={"Array Explanation 2"}
        height={"250"}
        width={"460"}
        className="mt-14"
      />
      <ThemeText className="my-5">
        The index of an array allows us to directly access a value at a
        particular location.
      </ThemeText>
      <ThemeText className="mb-5">
        If A is the name of this array, then you refer to the first location
        (the location with index 0 ) as A[0]. The location with index 2 is A[2].
      </ThemeText>
      <div className="rounded-md bg-gray-100 mt-14 p-5">
        <ThemeText>What&apos;s is A[2] ?</ThemeText>
        <Image
          src={"/array_explanation2.png"}
          alt={"Array Explanation 2"}
          height={"250"}
          width={"460"}
          className="mt-5"
        />
        <div className="flex">
          <Input
            type="text"
            value={qa1.value}
            onChange={(e) =>
              setQa1((qa1) => ({ ...qa1, value: e.target.value }))
            }
            className={cn(
              "mt-5 mr-5",
              qa1.isAnswered &&
                (qa1.isCorrect ? "border-green-500" : "border-red-500")
            )}
            disabled={qa1.isAnswered}
          />
          {!qa1.isAnswered && (
            <Button
              onClick={() => {
                if (qa1.value) {
                  setQa1((qa1) => ({
                    ...qa1,
                    isAnswered: true,
                    isCorrect: qa1.value == qa1.correctAnswer,
                  }));
                }
              }}
              variant="black"
              className="capitalize w-auto mt-5"
            >
              Submit
            </Button>
          )}
        </div>
        {qa1.isAnswered && !qa1.isCorrect && (
          <ThemeText className="mt-5 text-sm">Ans: -2</ThemeText>
        )}
      </div>
      <ThemeText className="mt-14">
        Our choice of data structure depends on the problem at hand. A drawing
        program may need to store points in a plane, colors, and line thickness:
      </ThemeText>
      <Image
        src={"/array_explanation3.png"}
        alt={"Array Explanation 3"}
        height={"191"}
        width={"400"}
        className="mt-5"
      />
      <ThemeText className="mt-14">
        A caller ID program needs to store different data, like a contact&apos;s
        name and phone number:
      </ThemeText>
      <Image
        src={"/array_explanation4.png"}
        alt={"Array Explanation 4"}
        height={"191"}
        width={"300"}
        className="mt-10 mx-auto"
      />
      <ThemeText className="mt-14">
        For caller ID, your phone could manage your contact list by creating two
        “parallel” arrays that have the same length — one for names, one for
        phone numbers:
      </ThemeText>
      <Image
        src={"/array_explanation5.png"}
        alt={"Array Explanation 5"}
        height={"154"}
        width={"540"}
        className="mt-10 mx-auto"
      />
      <MultipleChoice
        questionList={qurstionA}
        questionState={qa2}
        title="Where would you find Bea's phone number?"
        setQuestionState={setQa2}
        questionUniqueId="#arrayQA2"
      />
      <ThemeText className="mt-14">
        Over time, you might want to add more information about each of your
        contacts — their email address, zip code, or a note about who they are.
      </ThemeText>
      <ThemeText className="mt-5">
        It would be tedious to have to maintain many “parallel” arrays to keep
        track of all this information. Instead, each contact could be stored
        together in our next data structure — the record.
      </ThemeText>
      <SectionSwitchBtn
        title="Continue"
        className="mt-10 relative"
        buttonWrapperStyle="mx-0"
        handleClick={handleClick}
      />
    </div>
  );
};

export default ArrayExplanation;
