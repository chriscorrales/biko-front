import React from 'react';
import { Layout } from 'antd';
import Sider from './Sider';

const PrivateLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Layout.Content
          style={{
            padding: 24,
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
