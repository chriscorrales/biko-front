import { Typography } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap row;
  padding: 10px;
  align-items: center;
  border: 1px solid #cbcfd4;
  border-radius: 4px;
  width: 100%;
`;

export const UserImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const InformationContainer = styled.div`
  margin-left: 24px;
  width: 80%;
`;

export const Name = styled.h1`
  color: #20d7b2;
  font-size: 1.2em;
  margin: 0;
  line-height: 112%;
  font-style: normal;
  font-weight: normal;
`;

export const Description = styled(Typography.Paragraph)`
  margin: 0 !important;
  color: #cbcfd4;
  font-size: 1em;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row wrap;
  margin-top: 8px;
  width: 100%;

  & svg {
    fill: #20d7b2;
    margin: 0 5px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
