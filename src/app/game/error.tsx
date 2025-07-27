'use client';

import ErrorPage from '@/components/ErrorPage';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GameError({ error, reset }: ErrorProps) {
  return <ErrorPage error={error} reset={reset} />;
}
