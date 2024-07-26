import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import MarkdownIt from 'markdown-it';
import { ChangeEvent, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { FormattedMessage, history, useIntl } from 'umi';
import styles from './index.less';

export default function CreateBlogPage() {
  const intl = useIntl();
  const [title, setTitle] = useState('');
  const mdParser = new MarkdownIt();

  const titlePlaceholder = intl.formatMessage({
    id: 'blog_create_title_input_placeholder',
  });

  const backPage = () => {
    history.go(-1);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleEditorChange = ({
    html,
    text,
  }: {
    html: string;
    text: string;
  }) => {
    console.log(html, text);
  };

  // todo
  // 看看之前是怎么写的
  return (
    <div className={styles.page}>
      <header>
        <ArrowLeftOutlined onClick={backPage} />
        <Input
          placeholder={titlePlaceholder}
          value={title}
          onChange={handleTitleChange}
        />
        <Button type="primary">
          <FormattedMessage id="blog_create_button_label" />
        </Button>
      </header>
      <div className={styles.content}>
        <MdEditor
          className={styles.editor}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
}
