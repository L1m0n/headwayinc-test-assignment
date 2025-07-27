import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import useGameStore from '@/store/gameStore';
import delay from '@/lib/utils/delay';
import useAnswerValidation from './useAnswerValidation';

export default function useGameLogic() {
  const {
    currentQuestion,
    selectedAnswers,
    setSelectedAnswers,
    setCorrectAnswers,
    setCurrentQuestion,
    questionsByLevel,
    prizesByLevel,
    setPrize,
  } = useGameStore();

  const { validateAnswer } = useAnswerValidation();
  const router = useRouter();
  const selectAnswer = useCallback(
    async (answerId: string) => {
      const isAlreadySelected = selectedAnswers[answerId];
      const answersLength = Object.keys(selectedAnswers).length;

      if (isAlreadySelected || !currentQuestion) return;
      if (answersLength + 1 < currentQuestion.correctAnswers) {
        setSelectedAnswers({ ...selectedAnswers, [answerId]: answerId });
        return;
      }

      if (answersLength + 1 === currentQuestion.correctAnswers) {
        const nextQuestion = questionsByLevel.get(currentQuestion.level + 1);
        setSelectedAnswers({ ...selectedAnswers, [answerId]: answerId });
        await delay(1500);
        const { isCorrect, correctAnswers } = await validateAnswer(currentQuestion.id, {
          ...selectedAnswers,
          [answerId]: answerId,
        });
        setCorrectAnswers(correctAnswers);
        await delay(1000);
        if (isCorrect && nextQuestion) {
          setCurrentQuestion(nextQuestion);
          setPrize(prizesByLevel.get(currentQuestion.level) || 0);
          return;
        }

        router.push('/game-over');
      }
    },
    [
      currentQuestion,
      selectedAnswers,
      setSelectedAnswers,
      questionsByLevel,
      validateAnswer,
      router,
      setCorrectAnswers,
      setCurrentQuestion,
      prizesByLevel,
      setPrize,
    ]
  );

  return {
    selectAnswer,
  };
}
