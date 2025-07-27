'use client';

import GameContent from '@/components/GameContent';
import GameLayout from '@/components/GameLayout';
import GameSidebar from '@/components/GameSidebar';
import { type LevelsConfig, type Question } from '@/types';
import useGameData from '../../hooks/useGameData';
import Answers from '../Answers';
import Header from '../Header';
import PrizeLadder from '../PrizeLadder';
import useSidebar from '../../hooks/useSidebar';
import MenuButton from '../MenuButton';

interface GameClientProps {
  questions: Question[];
  levelsConfig: LevelsConfig;
}

export default function GameClient({ questions, levelsConfig }: GameClientProps) {
  useGameData(questions, levelsConfig);

  const { isOpened, toggle } = useSidebar();

  return (
    <GameLayout>
      <GameContent>
        <Header />
        <Answers />
      </GameContent>
      {isOpened && (
        <GameSidebar>
          <PrizeLadder />
        </GameSidebar>
      )}
      <MenuButton isOpened={isOpened} toggle={toggle} />
    </GameLayout>
  );
}
