import { Button, Card, Row } from 'antd';
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

export const CardLogin = styled(Card)`
  height: 470px;
`;

export const ItemCenter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  align-items: center;
  font-weight: 300;
  margin-bottom: 16px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const RememberMe = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonSubmit = styled(Button)`
  border-color: #20d7b2;
  color: #20d7b2;
`;
