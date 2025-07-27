import { useCallback } from 'react';

interface ValidationResult {
  isCorrect: boolean;
  correctAnswers: Map<string, string>;
}

export default function useAnswerValidation() {
  const validateAnswer = useCallback(
    async (
      questionId: string,
      selectedAnswers: Record<string, string>
    ): Promise<ValidationResult> => {
      try {
        const response = await fetch('/api/game/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            questionId,
            selectedAnswers,
          }),
        });

        const result = await response.json();
        const correctAnswers = new Map<string, string>();
        result.correctAnswers.forEach((answer: string) => {
          correctAnswers.set(answer, answer);
        });
        return {
          isCorrect: result.isCorrect,
          correctAnswers,
        };
      } catch (error) {
        console.error('Validation error:', error);
        return {
          isCorrect: false,
          correctAnswers: new Map(),
        };
      }
    },
    []
  );

  return {
    validateAnswer,
  };
}
