import React, { memo } from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  HomeOutlined,
} from '@ant-design/icons';


const MainMenu: React.FC = () => {

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="1" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="1" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>

    </Menu>
  );

}

export default memo(MainMenu);