import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.color};

  div {
    background: ${(props) => props.color};
  }
`;

export const Text = styled.p`
  margin: 0 !important;
`;

export const Circle = styled.div`
  border-radius: 50px;
  filter: blur(1px);
  height: 10px;
  margin-right: 8px;
  width: 10px;
`;
