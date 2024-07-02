import ChronicleEvent from './chronicle-event';
import styles from './index.less';

export default function HomePage() {
  return (
    <div className={styles.content}>
      <div className={styles.left}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}>
        <ChronicleEvent></ChronicleEvent>
      </div>
    </div>
  );
}
