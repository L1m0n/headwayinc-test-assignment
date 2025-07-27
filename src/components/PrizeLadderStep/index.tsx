import clsx from 'clsx';
import styles from './styles.module.css';
import PrizeItemSVG from './prize-item.svg';

interface PrizeLadderStepProps {
  amount: string;
  status?: 'current' | 'finished' | 'upcoming';
}

export default function PrizeLadderStep({ amount, status }: PrizeLadderStepProps) {
  const className = clsx(styles.prizeLadderStep, {
    [styles.current]: status === 'current',
    [styles.finished]: status === 'finished',
    [styles.upcoming]: status === 'upcoming',
  });

  return (
    <div className={className}>
      <PrizeItemSVG />
      <div className={styles.amount}>{amount}</div>
    </div>
  );
}
