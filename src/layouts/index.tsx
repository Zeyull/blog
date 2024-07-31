import Header from '@/components/header';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Outlet } from 'umi';
import styles from './index.less';

export default function BaseLayout() {
  const [headerClass, setHeaderClass] = useState('');
  const headerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleScroll = () => {
    if (headerRef.current && headerRef.current.offsetTop) {
      setHeaderClass(styles['scroll-header']);
    } else {
      setHeaderClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <div
        className={`${styles['header-container']} ${headerClass}`}
        ref={headerRef}
      >
        <Header></Header>
      </div>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', height: '64px' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
