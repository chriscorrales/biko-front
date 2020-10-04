import React from 'react';
import { Menu, Layout } from 'antd';
import BriefcaseOutlineIcon from 'mdi-react/BriefcaseOutlineIcon';
import HomeOutlineIcon from 'mdi-react/HomeOutlineIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Item } from './styles';
import Header from './Header';

const Sider: React.FC = () => {
  return (
    <Layout.Sider theme="dark">
      <Header />
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
