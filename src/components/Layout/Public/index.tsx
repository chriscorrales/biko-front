import React from 'react';
import { Layout } from 'antd';

const PublicLayout: React.FC = ({ children }) => {
  return <Layout.Content>{children}</Layout.Content>;
};

export default PublicLayout;
