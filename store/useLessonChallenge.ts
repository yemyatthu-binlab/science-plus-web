import { LessonChallenge } from "@/type";
import { create } from "zustand";

type LessonModalState = Partial<LessonChallenge> & {
  action: {
    setLessonChallenge: (val: LessonChallenge) => void;
    clearLessonChallenge: () => void;
    reduceHeart: () => void;
  };
};

export const useLessonChallenge = create<LessonModalState>((set) => ({
  initialPercentage: 0,
  initialHearts: 0,
  initialLessonId: undefined,
  initialLessonChallenges: undefined,
  userSubscription: undefined,
  action: {
    setLessonChallenge: (state: LessonChallenge) =>
      set((prev) => ({ ...prev, ...state })),
    clearLessonChallenge: () => set(defaultState),
    reduceHeart: () =>
      set((prev) => ({
        ...prev,
        initialHearts:
          prev.initialHearts && prev.initialHearts > 0
            ? prev.initialHearts - 1
            : prev.initialHearts,
      })),
  },
}));

export const useLessonActions = () =>
  useLessonChallenge((state) => state.action);

const defaultState = {
  initialPercentage: 0,
  initialHearts: 0,
  initialLessonId: undefined,
  initialLessonChallenges: undefined,
  userSubscription: undefined,
};
