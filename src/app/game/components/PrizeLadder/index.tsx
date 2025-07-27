import PrizeLadderStep from '@/components/PrizeLadderStep';
import getLevelStatus from '@/lib/utils/getLevelStatus';
import useGameStore from '@/store/gameStore';

export default function PrizeLadder() {
  const { levels, symbol, currentQuestion } = useGameStore();

  return levels.map(({ level, amount }) => (
    <PrizeLadderStep
      key={level}
      amount={`${symbol}${amount}`}
      status={getLevelStatus(currentQuestion?.level ?? 0, level)}
    />
  ));
}
