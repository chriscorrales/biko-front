import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column wrap;
  max-width: 400px;
  width: 100%;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 40%;

  & svg {
    fill: #20d7b2;
    margin: 0 5px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
