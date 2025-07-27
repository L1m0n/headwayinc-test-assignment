'use client';

import PageTitle from '@/components/PageTitle';
import useGameStore from '@/store/gameStore';

export default function Prize() {
  const { symbol, prize } = useGameStore();

  return (
    <PageTitle>
      {symbol} {prize} {prize === 0 ? '🥲' : ''}
    </PageTitle>
  );
}
