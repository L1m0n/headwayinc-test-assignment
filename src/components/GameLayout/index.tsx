import styles from './styles.module.css';

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.gameLayout}>{children}</main>;
}
