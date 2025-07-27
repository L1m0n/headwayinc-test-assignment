import levelsData from '@/data/levels.json';
import questionsData from '@/data/questions.json';
import { type Question, type LevelsConfig } from '@/types';
import GameClient from './components/GameClient';

export default async function Game() {
  const questions = questionsData as Question[];
  const levelsConfig = levelsData as LevelsConfig;

  return <GameClient questions={questions} levelsConfig={levelsConfig} />;
}
