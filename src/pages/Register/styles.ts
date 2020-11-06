import { Row } from 'antd';
import styled from 'styled-components';

export const BackgroundGradientRow = styled(Row)`
  background: linear-gradient(-45deg, #0f4e9c, #1aa5aa, #1fcbaf, #136aa0);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Card = styled(Row)`
  background: #3c444d;
  border-radius: 4px;
  padding: 24px;
`;
