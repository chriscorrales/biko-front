import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  position: relative;

  background: #3c444d;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 100%;
  padding: 24px;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #20d7b2;
  font-size: 2.286em;
  margin: 0;
  line-height: 112%;
  font-style: normal;
  font-weight: normal;
  width: 100%;
`;

export const Description = styled.p`
  margin: 0;
  color: #cbcfd4;
  font-size: 1em;
  line-height: 22px;
`;
