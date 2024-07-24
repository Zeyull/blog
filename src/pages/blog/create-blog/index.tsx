import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { FormattedMessage, history, useIntl } from 'umi';
import styles from './index.less';

export default function CreateBlogPage() {
  const intl = useIntl();
  const [title, setTitle] = useState('');

  const titlePlaceholder = intl.formatMessage({
    id: 'blog_create_title_input_placeholder',
  });
  const backPage = () => {
    history.go(-1);
  };
  // todo 看看之前是怎么写的
  return (
    <div className={styles.content}>
      <header>
        <ArrowLeftOutlined onClick={backPage} />
        <Input
          placeholder={titlePlaceholder}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Button type="primary">
          <FormattedMessage id="blog_create_button_label" />
        </Button>
      </header>
      {title}
    </div>
  );
}
