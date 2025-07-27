'use client';

import AnswerOption from '@/components/AnswerOption';
import getAnswerStatus from '@/lib/utils/getAnswerStatus';
import useGameStore from '@/store/gameStore';
import styles from './styles.module.css';
import useGameLogic from '../../hooks/useGameLogic';

export default function Answers() {
  const { selectAnswer } = useGameLogic();
  const { currentQuestion, selectedAnswers, correctAnswers } = useGameStore();

  return (
    <div className={styles.answers}>
      {currentQuestion?.options.map(option => (
        <AnswerOption
          key={option.id}
          optionId={option.id}
          text={option.text}
          status={getAnswerStatus(selectedAnswers, option.id, correctAnswers)}
          onClick={() => selectAnswer(option.id)}
        />
      ))}
    </div>
  );
}
