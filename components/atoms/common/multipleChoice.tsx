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
import useAnswerSubmit from "@/hook/custom/useAnswerSubmit";
import { Ban, Check, CircleX, Cross, PartyPopper } from "lucide-react";

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
  const { updateChallengeAsComplete, decreaseHeartCount } = useAnswerSubmit({
    challengeId: challenge?.id as number,
  });

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
        !challenge.completed && updateChallengeAsComplete();
      }
      if (questionState.value !== questionState.correctAnswer && challenge) {
        void incorrectControls.play();
        !challenge.completed && decreaseHeartCount();
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
              "flex items-center space-x-2 px-3",
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
            <label className="p-3 flex-1" htmlFor={questionUniqueId + idx}>{item.label}</label>
            {questionState.isAnswered &&
              !questionState.isCorrect &&
              questionState.value === item.value && (
                <div className="flex justify-end">
                  <CircleX className="w-5 h-5 text-red-500" />
                </div>
              )}
            {questionState.isAnswered &&
              questionState.correctAnswer === item.value && (
                <div className="flex justify-end">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              )}
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
      {questionState.isAnswered && questionState.isCorrect && (
        <div className="flex flex-row items-center mt-3">
          <div className="bg-green-500 rounded-full h-10 w-10 items-center flex justify-center ">
            <PartyPopper className="h-5 w-5 text-white" />
          </div>
          <ThemeText className="text-green-500 ml-2">Correct</ThemeText>
        </div>
      )}
      {questionState.isAnswered && !questionState.isCorrect && (
        <div className="flex flex-row items-center mt-5">
          <div className="bg-red-500 rounded-full h-8 w-8 items-center flex justify-center ">
            <Ban className="h-5 w-5 text-white" />
          </div>
          <ThemeText className="text-red-500 ml-2">Incorrect</ThemeText>
        </div>
      )}
    </div>
  );
};

export default MultipleChoice;
