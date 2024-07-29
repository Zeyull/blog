import { Card } from 'antd';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './index.less';
import pageContext from './pageContext.js';

export default function BlogDetailPage() {
  const titleContext = '这是一个测试标题';
  return (
    <div className={styles.page}>
      <Card title={titleContext}>
        <Markdown remarkPlugins={[remarkGfm]}>{pageContext}</Markdown>
      </Card>
    </div>
  );
}
