import { create } from 'zustand';
import { type Question, type LevelsConfig, Level } from '@/types';

interface GameState {
  currentQuestion: Question | null;
  selectedAnswers: Record<string, string>;
  questions: Question[];
  questionsByLevel: Map<number, Question>;
  prizesByLevel: Map<number, number>;
  currency: string | null;
  symbol: string | null;
  levels: Level[];
  correctAnswers: Map<string, string>;
  prize: number;

  setQuestions: (questions: Question[]) => void;
  setCurrentQuestion: (question: Question) => void;
  setSelectedAnswers: (answers: Record<string, string>) => void;
  setLevelsConfig: (levelsConfig: LevelsConfig) => void;
  setCorrectAnswers: (correctAnswers: Map<string, string>) => void;
  setPrize: (prize: number) => void;
  resetGame: () => void;
}

const useGameStore = create<GameState>(set => ({
  currentQuestion: null,
  selectedAnswers: {},
  questions: [],
  questionsByLevel: new Map(),
  prize: 0,
  prizesByLevel: new Map(),
  currency: '',
  symbol: '',
  levels: [],
  correctAnswers: new Map(),
  setQuestions: (questions: Question[]) =>
    set({
      currentQuestion: questions[0],
      questions,
      questionsByLevel: questions.reduce((acc, question) => {
        acc.set(question.level, question);
        return acc;
      }, new Map<number, Question>()),
    }),
  setSelectedAnswers: selectedAnswers => set({ selectedAnswers }),
  setCorrectAnswers: correctAnswers => set({ correctAnswers }),
  setLevelsConfig: levelsConfig =>
    set({
      ...levelsConfig,
      prizesByLevel: levelsConfig.levels.reduce((acc, level) => {
        acc.set(level.level, level.amount);
        return acc;
      }, new Map<number, number>()),
    }),
  setCurrentQuestion: currentQuestion =>
    set({
      currentQuestion,
      selectedAnswers: {},
      correctAnswers: new Map(),
    }),
  setPrize: prize => set({ prize }),
  resetGame: () => {
    set({
      currentQuestion: null,
      selectedAnswers: {},
      correctAnswers: new Map(),
      prize: 0,
    });
  },
}));

export default useGameStore;
