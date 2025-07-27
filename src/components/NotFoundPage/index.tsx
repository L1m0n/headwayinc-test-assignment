'use client';

import Button from '@/components/Button';
import styles from './styles.module.css';

export default function NotFoundPage() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <div className={styles.notFoundIcon}>🔍</div>
        <h1 className={styles.notFoundTitle}>Page Not Found</h1>
        <p className={styles.notFoundMessage}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className={styles.notFoundActions}>
          <Button onClick={handleGoHome}>Go Home</Button>
        </div>
      </div>
    </div>
  );
}
