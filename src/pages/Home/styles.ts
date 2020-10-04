import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;

  position: absolute;
  width: 350px;
  height: 370px;

  background: #3c444d;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  padding: 24px;

  & span {
    color: #20d7b2;
    font-size: 2.286em;
    margin: 0;
    width: 100%;
  }

  & p {
    margin: 0;
    color: #cbcfd4;
    font-size: 1em;
  }
`;
