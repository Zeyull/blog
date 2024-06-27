import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';

const { Search } = Input;

export default function HeaderSearch() {
  const onSearch: SearchProps['onSearch'] = () => {};

  return (
    <>
      <Search
        placeholder="large size"
        allowClear
        onSearch={onSearch}
        enterButton={<SearchOutlined />}
        size="middle"
        loading
      />
    </>
  );
}
