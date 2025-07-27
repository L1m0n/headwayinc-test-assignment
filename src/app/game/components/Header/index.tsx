import Text from '@/components/Text';
import useGameStore from '@/store/gameStore';
import styles from './styles.module.css';

export default function Header() {
  const { currentQuestion } = useGameStore();

  return (
    <header className={styles.header}>
      <Text variant="default">{currentQuestion?.question}</Text>
    </header>
  );
}
