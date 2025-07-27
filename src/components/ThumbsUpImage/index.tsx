import styles from './styles.module.css';

export default function ThumbsUpImage() {
  return (
    <div className={styles.container}>
      <picture>
        <source srcSet="/images/hand-small.png" media="(max-width: 768px)" />
        <img
          src="/images/hand.png"
          alt="Hand giving thumbs up"
          width={624}
          height={367}
          className={styles.image}
        />
      </picture>
    </div>
  );
}
