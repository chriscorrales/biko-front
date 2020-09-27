import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.dark.less';

export default createGlobalStyle`
  .ant-layout-sider-trigger {
    background: #333A41;
  }

  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: 1px solid #20D7B2;
  }
`;
