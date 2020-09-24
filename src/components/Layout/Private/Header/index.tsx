import React from 'react';
import { Layout, Row, Typography } from 'antd';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Row justify="end">
        <Typography.Text>Bikos App</Typography.Text>
      </Row>
    </Layout.Header>
  );
};

export default Header;
