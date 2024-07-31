import { Card } from 'antd';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import styles from './index.less';
import pageContext from './pageContext.js';

export default function BlogDetailPage() {
  const titleContext = '这是一个测试标题';
  return (
    <div className={styles.page}>
      <div className={styles['main-context']}>
        <p className={styles.title}>{titleContext}</p>
        <Card>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                /* eslint-disable */
                const { children, node, className, ...rest } = props;
                /* eslint-enable */
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  //@ts-ignore No overload matches this call 奇怪的错误
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={prism}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={(className ?? '') + styles.code}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {pageContext}
          </Markdown>
        </Card>
      </div>
      <div className={styles['left-context']}></div>
      <div className={styles['right-context']}></div>
    </div>
  );
}
