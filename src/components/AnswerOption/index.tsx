'use client';

import HexagonBorder from '@/components/HexagonBorder';
import styles from './styles.module.css';

interface Props {
  optionId: string;
  text: string;
  status?: 'selected' | 'correct' | 'wrong' | '';
  onClick?: () => void;
}

export default function AnswerOption({ optionId, text, status = '', onClick }: Props) {
  return (
    <button type="button" className={`${styles.answerOption} ${styles[status]}`} onClick={onClick}>
      <HexagonBorder position="left" />
      <HexagonBorder position="right" />
      <div className={styles.content}>
        <span className={styles.letter}>{optionId}:</span>
        <span className={styles.text}>{text}</span>
      </div>
    </button>
  );
}
