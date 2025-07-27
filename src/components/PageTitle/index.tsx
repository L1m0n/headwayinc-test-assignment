import styles from './styles.module.css';

export default function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.pageTitle}>{children}</h1>;
}
