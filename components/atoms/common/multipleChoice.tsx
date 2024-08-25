import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ThemeText from "./themeText";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Button } from "@/components/ui/button";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";

type Props = {
  questionList: SciencePlus.Question[];
  questionState: SciencePlus.QuestionSructure;
  title: string;
  customHeader?: React.ReactElement;
  questionUniqueId: string;
  setQuestionState: Dispatch<SetStateAction<SciencePlus.QuestionSructure>>;
  // handleSubmit: () => void;
  // handleAnswerChange: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>;

const MultipleChoice = ({
  questionState,
  questionList,
  title,
  setQuestionState,
  questionUniqueId,
  customHeader,
  className,
  ...props
}: Props) => {
  const handleAnsChange = (value: string) => {
    if (!questionState.isAnswered) {
      setQuestionState((qaVal) => ({ ...qaVal, value }));
    }
  };

  const handleAnsSubmit = () => {
    if (questionState.value) {
      setQuestionState((prev) => ({
        ...prev,
        isAnswered: true,
        isCorrect: prev.correctAnswer == prev.value,
      }));
    }
  };

  const addExtraStyleForRadio = (
    radioItemVal: string,
    customStyle?: string[]
  ): ClassValue => {
    if (!questionState.isAnswered) return;

    if (
      (questionState.value == radioItemVal &&
        questionState.value == questionState.correctAnswer) ||
      radioItemVal == questionState.correctAnswer
    ) {
      return customStyle
        ? customStyle[0]
        : "border rounded-md border-green-500 bg-green-50";
    }
    if (
      questionState.value == radioItemVal &&
      questionState.value !== questionState.correctAnswer
    ) {
      return customStyle
        ? customStyle[1]
        : "border rounded-md border-red-500 bg-red-100";
    }
  };

  return (
    <div className="rounded-md bg-gray-100 p-5 mt-14">
      {customHeader ? (
        customHeader
      ) : (
        <ThemeText className="text-sm">{title}</ThemeText>
      )}
      <RadioGroup
        className="mt-5"
        disabled={questionState.isAnswered}
        onValueChange={handleAnsChange}
      >
        {questionList.map((item, idx) => (
          <div
            className={cn(
              "flex items-center space-x-2 p-3",
              addExtraStyleForRadio(item.value)
            )}
            key={idx}
          >
            <RadioGroupItem
              className={cn(
                addExtraStyleForRadio(item.value, [
                  "border-green-700 text-green-700",
                  "border-red-700 text-red-700",
                ]),
                "min-w-[16px] mr-1"
              )}
              value={item.value}
              id={questionUniqueId + idx}
            />
            <label htmlFor={questionUniqueId + idx}>{item.label}</label>
          </div>
        ))}
      </RadioGroup>
      {!questionState.isAnswered && (
        <Button
          onClick={handleAnsSubmit}
          variant="black"
          disabled={!questionState.value}
          className="capitalize w-auto mt-5"
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default MultipleChoice;
