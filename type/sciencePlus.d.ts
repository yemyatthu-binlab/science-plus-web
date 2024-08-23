declare namespace SciencePlus {
  type QuestionSructure = {
    value: string;
    correctAnswer: string;
    isAnswered: boolean;
    isCorrect: boolean;
  };

  type Question = {
    label: string;
    value: string;
  };
}
