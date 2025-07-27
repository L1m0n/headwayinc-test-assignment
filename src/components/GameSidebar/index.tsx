import styles from './styles.module.css';

export default function GameSidebar({ children }: { children: React.ReactNode }) {
  return <aside className={styles.gameSidebar}>{children}</aside>;
}
