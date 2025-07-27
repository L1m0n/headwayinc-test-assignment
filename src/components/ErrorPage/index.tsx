'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';
import styles from './styles.module.css';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset, error }: ErrorPageProps) {
  useEffect(() => {
    console.error(`Error:`, error);
  }, [error]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>😢</div>
        <h1 className={styles.errorTitle}>Something went wrong</h1>
        <p className={styles.errorMessage}>Something went wrong with the game. Please try again.</p>
        <div className={styles.errorActions}>
          <Button onClick={reset}>Try Again</Button>
          <Button onClick={handleGoHome}>Go Home</Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className={styles.errorDetails}>
            <summary className={styles.errorSummary}>Error Details (Development)</summary>
            <pre className={styles.errorStack}>
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
