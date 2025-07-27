export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  level: number;
  question: string;
  correctAnswers: number;
  options: QuestionOption[];
}

export interface CorrectAnswer {
  [questionId: number]: string[];
}

export interface Level {
  level: number;
  amount: number;
}

export interface LevelsConfig {
  currency: string;
  symbol: string;
  levels: Level[];
}
