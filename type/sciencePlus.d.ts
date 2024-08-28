declare namespace SciencePlus {
  type MultiChoiceAnsSructure = {
    value: string;
    correctAnswer: string;
    isAnswered: boolean;
    isCorrect: boolean;
  };

  type MultiChoiceQuestion = {
    label: string;
    value: string;
  };
}
