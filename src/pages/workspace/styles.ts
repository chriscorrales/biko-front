import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;

  position: absolute;
  width: 350px;
  height: 370px;

  background: #3C444D;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  padding: 35px;

  & span {
    color: #20D7B2;
    font-size: 2.286em;
    width: 100%
  }

  & p {
    color: #CBCFD4;
    font-size: 1em;
  }

`
