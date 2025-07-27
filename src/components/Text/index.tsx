import styles from './styles.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary';
}

export default function Text({ children, variant = 'default' }: TextProps) {
  return <p className={`${styles.text} ${styles[variant]}`}>{children}</p>;
}
