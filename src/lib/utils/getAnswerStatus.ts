export default function getAnswerStatus(
  selectedAnswers: Record<string, string>,
  answerId: string,
  correctAnswers: Map<string, string>
) {
  const hasCorrectAnswers = correctAnswers.size > 0;
  const isSelected = selectedAnswers[answerId];
  const isCorrect = correctAnswers.has(answerId);

  if (isCorrect) return 'correct';
  if (hasCorrectAnswers && isSelected && !isCorrect) return 'wrong';
  if (isSelected) return 'selected';

  return '';
}
