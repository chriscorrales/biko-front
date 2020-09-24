import React from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

const PrivateLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Layout.Content>{children}</Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
