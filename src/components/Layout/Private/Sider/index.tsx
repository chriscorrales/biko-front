import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import BriefcaseOutlineIcon from 'mdi-react/BriefcaseOutlineIcon';
import HomeOutlineIcon from 'mdi-react/HomeOutlineIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Item } from './styles';
import UserHeader from './UserHeader';

const Sider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout.Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((prev) => !prev)}
    >
      <UserHeader />
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Item key="1" icon={<HomeOutlineIcon className="anticon" />}>
          Início
        </Item>
        <Item icon={<BriefcaseOutlineIcon className="anticon" />} key="2">
          Meus Serviços
        </Item>
        <Item key="3" icon={<StarOutlineIcon className="anticon" />}>
          Avaliações
        </Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
