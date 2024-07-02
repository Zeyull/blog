import Header from '@/components/header';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { Outlet } from 'umi';
import styles from './index.less';

export default function BaseLayout() {
  return (
    <Layout>
      <Header></Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', height: '64px' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
