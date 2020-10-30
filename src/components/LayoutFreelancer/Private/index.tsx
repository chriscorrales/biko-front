import React from 'react';
import { Layout, Menu } from 'antd';

const PrivateLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Disponível</Menu.Item>
          <Menu.Item key="2">Em progresso</Menu.Item>
          <Menu.Item key="3">Realizados</Menu.Item>
        </Menu>
      </Layout.Header>
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
