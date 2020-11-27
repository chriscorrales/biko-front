import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  background: #3c444d;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 100%;
  padding: 24px;
  width: 100%;
`;

export const EmptyFreelance = styled.p`
  width: 100%;
  color: #20d7b2;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const DateCreate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #20d7b2;
  font-size: 1.5em;
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
