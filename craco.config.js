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
              '@primary-color': '#20D7B2', // primary color for all components
              '@component-background': '#3C444D',
              '@text-color-inverse': '#20D5B1',
              '@text-selection-bg': '#333A41',
              '@menu-item-active-bg': '#333A41',
              '@layout-body-background': '#30363D',
              '@layout-header-background': '#3C444D',

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
