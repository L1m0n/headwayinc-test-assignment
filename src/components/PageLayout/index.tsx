import styles from './styles.module.css';

export default function PageLayout({
  children,
  withBackground = false,
}: {
  children: React.ReactNode;
  withBackground?: boolean;
}) {
  return (
    <main
      className={`${styles.pageLayout} ${withBackground ? styles.pageLayoutWithBackground : ''}`}
    >
      {children}
    </main>
  );
}
