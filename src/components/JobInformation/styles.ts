import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
`;

export const Title = styled.h1`
  color: #20d7b2;
  font-size: 1.5em;
  line-height: 112%;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  width: 100%;
`;

export const Subtitle = styled.h1`
  color: #20d7b2;
  font-size: 1.2em;
  margin-left: 10px;
  line-height: 112%;
  font-style: normal;
  font-weight: normal;
`;

export const Description = styled.p`
  margin: 0;
  color: #cbcfd4;
  font-size: 1em;
  line-height: 22px;
`;

export const Address = styled.p`
  margin: 0;
  color: #cbcfd4;
  font-size: 1em;
  line-height: 22px;
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
