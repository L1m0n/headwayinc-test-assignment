import styles from './styles.module.css';

export default function ContentPanel({ children }: { children: React.ReactNode }) {
  return <div className={styles.contentPanel}>{children}</div>;
}
