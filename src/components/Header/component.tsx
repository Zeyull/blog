import imgHead from '@/assets/head-img.jpg';
import styles from './component.less';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={imgHead} />
    </div>
  );
}
