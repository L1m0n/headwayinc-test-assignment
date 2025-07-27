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
  ariaLabel?: string;
  role?: string;
}

export function ButtonLink({ children, href }: ButtonLinkProps) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}

export default function Button({
  children,
  disabled = false,
  onClick,
  ariaLabel,
  role = 'button',
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
      aria-label={ariaLabel}
      role={role}
    >
      {children}
    </button>
  );
}
