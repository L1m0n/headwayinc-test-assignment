import { NextRequest, NextResponse } from 'next/server';
import correctAnswersData from '@/data/correct-answers.json';
import questionsData from '@/data/questions.json';
import { Question } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { questionId, selectedAnswers } = (await request.json()) as {
      questionId: string;
      selectedAnswers: Record<string, string>;
    };

    if (!questionId || !selectedAnswers) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const question = questionsData.find((q: Question) => q.id === questionId);

    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    const correctAnswerIds = correctAnswersData[question.id as keyof typeof correctAnswersData];

    let isCorrect: boolean;
    if (correctAnswerIds.length === 1) {
      isCorrect = correctAnswerIds[0] === selectedAnswers[correctAnswerIds[0]];
    } else {
      isCorrect = correctAnswerIds.every((answer: string) => selectedAnswers[answer] === answer);
    }

    return NextResponse.json({
      isCorrect,
      correctAnswers: correctAnswerIds,
    });
  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Validation endpoint' });
}
