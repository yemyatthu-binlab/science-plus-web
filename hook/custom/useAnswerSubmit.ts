import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { reduceHearts } from "@/actions/user-progress";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { useLessonActions } from "@/store/useLessonChallenge";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  challengeId: number;
};
const useAnswerSubmit = ({ challengeId }: Props) => {
  const [pending, startTransition] = useTransition();
  const { open: openHeartsModal } = useHeartsModal();
  const { reduceHeart } = useLessonActions();
  // const handleAnsSubmit = () => {
  //   if (questionState.value) {
  //     setQuestionState((prev) => ({
  //       ...prev,
  //       isAnswered: true,
  //       isCorrect: prev.correctAnswer == prev.value,
  //     }));
  //     if (questionState.value == questionState.correctAnswer && challenge) {

  //     }
  //     if (questionState.value !== questionState.correctAnswer && challenge) {
  //       void incorrectControls.play();
  //       reduceHeart();
  //       startTransition(() => {
  //         reduceHearts(challenge.id)
  //           .then((response) => {
  //             if (response?.error === "hearts") {
  //               openHeartsModal();
  //               return;
  //             }
  //           })
  //           .catch(() =>
  //             toast.error("Something went wrong. Please try again.")
  //           );
  //       });
  //     }
  //   }
  // };

  const updateChallengeAsComplete = () => {
    startTransition(() => {
      upsertChallengeProgress(challengeId)
        .then((response) => {})
        .catch(() => toast.error("Something went wrong. Please try again."));
    });
  };

  const decreaseHeartCount = () => {
    reduceHeart();
    startTransition(() => {
      reduceHearts(challengeId)
        .then((response) => {
          if (response?.error === "hearts") {
            openHeartsModal();
            return;
          }
        })
        .catch(() => toast.error("Something went wrong. Please try again."));
    });
  };

  return { updateChallengeAsComplete, decreaseHeartCount };
};

export default useAnswerSubmit;
