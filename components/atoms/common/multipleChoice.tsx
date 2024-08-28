import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ThemeText from "./themeText";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Button } from "@/components/ui/button";
import { Dispatch, HTMLAttributes, SetStateAction, useTransition } from "react";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { Challenge } from "@/type";
import { toast } from "sonner";
import { useAudio } from "react-use";
import { reduceHearts } from "@/actions/user-progress";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { useLessonActions } from "@/store/useLessonChallenge";

type Props = {
  questionList: SciencePlus.MultiChoiceQuestion[];
  questionState: SciencePlus.MultiChoiceAnsSructure;
  title: string;
  customHeader?: React.ReactElement;
  questionUniqueId: string;
  challenge?: Challenge;
  setQuestionState: Dispatch<
    SetStateAction<SciencePlus.MultiChoiceAnsSructure>
  >;
} & HTMLAttributes<HTMLDivElement>;

const MultipleChoice = ({
  questionState,
  questionList,
  title,
  setQuestionState,
  questionUniqueId,
  customHeader,
  className,
  challenge,
  ...props
}: Props) => {
  const [pending, startTransition] = useTransition();
  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });
  const { open: openHeartsModal } = useHeartsModal();
  const { reduceHeart } = useLessonActions();

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
      if (questionState.value == questionState.correctAnswer && challenge) {
        void correctControls.play();
        startTransition(() => {
          upsertChallengeProgress(challenge.id)
            .then((response) => {
              console.log("response::", response);
              // if (initialPercentage === 100) {
              //   setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
              // }
            })
            .catch(() =>
              toast.error("Something went wrong. Please try again.")
            );
        });
      }
      if (questionState.value !== questionState.correctAnswer && challenge) {
        void incorrectControls.play();
        reduceHeart();
        startTransition(() => {
          reduceHearts(challenge.id)
            .then((response) => {
              if (response?.error === "hearts") {
                openHeartsModal();
                return;
              }
            })
            .catch(() =>
              toast.error("Something went wrong. Please try again.")
            );
        });
      }
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
      {incorrectAudio}
      {correctAudio}
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
