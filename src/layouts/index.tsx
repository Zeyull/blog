import Header from '@/components/Header';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { Outlet } from 'umi';

export default function BaseLayout() {
  return (
    <Layout>
      <Header></Header>
      <Content style={{ padding: '0 28px', minHeight: '240px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
