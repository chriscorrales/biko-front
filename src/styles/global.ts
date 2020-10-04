import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.dark.less';

export default createGlobalStyle`
  .ant-layout-sider-trigger {
    background: #333A41;
  }

  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: none;
  }

  .ant-badge-count {
    background: #20d7b2;
  }
`;
