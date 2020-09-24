import React, { useState } from 'react';
import { Menu, Layout } from 'antd';

const Sider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((prev) => !prev)}
    >
      <div
        style={{
          margin: '8px 0',
          width: '100%',
          maxWidth: '200px',
          height: '64px',
          background: '#fff',
        }}
      />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.SubMenu key="sub1" title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9" />
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
