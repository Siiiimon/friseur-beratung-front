export type ChoiceType = {
  id: string;
  label: string;
  tags: string[];
};

export type QuestionType = {
  id: string;
  label: string;
  choices: ChoiceType[];
};
