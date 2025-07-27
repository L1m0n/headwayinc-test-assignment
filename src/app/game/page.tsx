import { Suspense, lazy } from 'react';
import levelsData from '@/data/levels.json';
import questionsData from '@/data/questions.json';
import { type Question, type LevelsConfig } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

const GameClient = lazy(() => import('./components/GameClient'));

export default async function Game() {
  const questions = questionsData as Question[];
  const levelsConfig = levelsData as LevelsConfig;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GameClient questions={questions} levelsConfig={levelsConfig} />
    </Suspense>
  );
}
