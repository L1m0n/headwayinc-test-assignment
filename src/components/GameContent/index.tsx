import styles from './styles.module.css';

export default function GameContent({ children }: { children: React.ReactNode }) {
  return <div className={styles.gameContent}>{children}</div>;
}
