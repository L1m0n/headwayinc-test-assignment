'use client';

import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
}

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export function ButtonLink({ children, href }: ButtonLinkProps) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}

export default function Button({ children, disabled = false, onClick }: ButtonProps) {
  return (
    <button type="button" disabled={disabled} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
