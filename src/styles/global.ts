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

  .ant-layout-sider-trigger, .ant-select-item, .ant-select-dropdown {
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

  .ant-modal-content, .ant-popover-inner-content, .ant-modal-header, .ant-popover-title {
    background-color: #333A41;
  }

  .ant-select-selector {
    background-color: #fff !important;
  }

  .ant-select-arrow {
    & svg {
      fill: #20D7B2;
    }
  }

  .ant-select-selection-item {
    color: #747D88;
  }

  .ant-input-number {
    width: 100% !important;
  }

  .ant-card-body {
    height: 100%;
  }

  .ant-btn, .ant-checkbox-inner {
    border-color: #CBCFD4;
  }

  .ant-layout-header {
    padding: 0;
  }
`;
