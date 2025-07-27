import { useEffect } from 'react';
import useGameStore from '@/store/gameStore';
import { type LevelsConfig, type Question } from '@/types';

export default function useGameData(questions: Question[], levelsConfig: LevelsConfig) {
  const { setQuestions, setLevelsConfig, resetGame } = useGameStore();

  useEffect(() => {
    resetGame();
    setQuestions(questions);
    setLevelsConfig(levelsConfig);
  }, [questions, levelsConfig]);
}
