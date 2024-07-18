import { ArrowLeftOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './index.less';

export default function CreateBlogPage() {
  const backPage = () => {
    history.go(-1);
  };

  return (
    <div className={styles.content}>
      <header>
        <ArrowLeftOutlined onClick={backPage} />
      </header>
    </div>
  );
}
