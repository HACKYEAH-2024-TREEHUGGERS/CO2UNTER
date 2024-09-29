import { create } from 'zustand';

type SurveyState = {
  currentQuestion: number;
  answers: Record<string, any>;
};

type Actions = {
  setAnswer: (question: string, answer: any) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
};

export const useSurveyStore = create<SurveyState & Actions>()((set) => ({
  answers: {},
  currentQuestion: 0,
  setAnswer: (question, answer) =>
    set((state) => ({ answers: { ...state.answers, [question]: answer } })),
  nextQuestion: () =>
    set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
  prevQuestion: () =>
    set((state) => ({ currentQuestion: state.currentQuestion - 1 })),
}));
