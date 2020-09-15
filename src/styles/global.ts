import { createGlobalStyle } from 'styled-components';

const bodyStyle = window.getComputedStyle(document.body);

const marginTop = bodyStyle.getPropertyValue('margin-top');
const marginLeft = bodyStyle.getPropertyValue('margin-left');
const marginRight = bodyStyle.getPropertyValue('margin-right');

export default createGlobalStyle`
  .biko-root {
    margin: 0;
    padding: 0;
    background-color: white;
    box-shadow: 0px 0px 5px #333;
    width: 100%;
    margin-top: -${marginTop};
    margin-left: -${marginLeft};
    margin-right: -${marginRight};
    position: absolute;
  }

  .biko-root * {
    box-sizing: border-box;
  }
`