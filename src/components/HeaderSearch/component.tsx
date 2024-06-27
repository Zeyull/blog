import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useIntl } from 'umi';

const { Search } = Input;

export default function HeaderSearch() {
  const intl = useIntl();
  const placeholder = intl.formatMessage({
    id: 'home_search_placeholder',
  });
  const onSearch: SearchProps['onSearch'] = () => {};

  return (
    <>
      <Search
        placeholder={placeholder}
        allowClear
        onSearch={onSearch}
        enterButton={<SearchOutlined />}
        size="middle"
        loading={false}
      />
    </>
  );
}
