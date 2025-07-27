import clsx from 'clsx';
import styles from './styles.module.css';

interface MenuButtonProps {
  isOpened: boolean;
  toggle: () => void;
}

export default function MenuButton({ isOpened, toggle }: MenuButtonProps) {
  return (
    <button
      className={clsx(styles.menuButton, isOpened && styles.menuButtonOpened)}
      type="button"
      onClick={toggle}
      aria-label="Menu"
    >
      <div className={styles.menuIcon}>
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
      </div>
    </button>
  );
}
