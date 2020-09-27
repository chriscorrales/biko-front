/* eslint-disable import/no-extraneous-dependencies */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#20D7B2',
              '@body-background': '#30363D',
              '@component-background': '#3C444D',
              '@heading-color': '#20D7B2',
              '@text-color': '#CBCFD4',
              '@text-color-secondary': '#76798A',
              '@text-color-inverse': '#474F5A',
              '@text-color-dark': '#CBCFD4',
              '@text-color-secondary-dark': '#A0A4AA',
              '@text-selection-bg': '#333A41',
              '@layout-body-background': '#30363D',
              '@layout-header-background': '#3C444D',
              '@border-color-split': '#50575E',
              '@border-color-base': '#30363D',
              '@border-radius-base': '6px',
              '@border-radius-sm': '6px',
              '@input-bg': '#FFFFFF',
              '@input-color': '#747D88',
              '@input-border-color': '#FFFFFF',
              '@input-placeholder-color': '#CBCFD4',
              '@checkbox-size': '18px',
              '@btn-text-shadow': 'none',
              '@menu-item-active-bg': '#333A41',

              //   "@success-color": "#52c41a", // success state color
              //   "@warning-color": "#faad14", // warning state color
              //   "@error-color": "#f5222d", // error state color
              //   "@font-size-base": "14px", // major text font size
              //   "@heading-color": "rgba(0, 0, 0, 0.85)", // heading text color
              //   "@text-color": "#fff", // major text color
              //   "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // secondary text color
              //   "@disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
              //   "@border-radius-base": "2px", // major border radius
              //   "@border-color-base": "#d9d9d9", // major border color
              //   "@box-shadow-base":
              //     "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)", // major shadow for layers
              //   "@body-background": "#30363d",
              //   "@component-background": "#30363d",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
