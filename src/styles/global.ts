import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';
import 'antd/dist/antd.dark.less';

export default createGlobalStyle`

  * {
    font-family: "Roboto";
    margin: 0;
    padding: 0;
  }

  img {
    object-fit: cover;
  }

  .ant-layout-sider-trigger {
    background: #333A41;
  }

  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: none;
  }

  .ant-badge-count {
    background: linear-gradient(90deg,#20d4b1 0%,#0f4b9c 186.42%);;
  }

  .ant-avatar-group .ant-avatar {
    border: 2px solid #20D7B2;
  }

  .ant-avatar {
    background: #20D7B2;
  }

  .ant-layout-header {
    padding: 0;
  }
`;
