import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
`;

export const UserImage = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(90deg, #20d4b1 0%, #0f4b9c 186.42%);
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 89%;
    height: 89%;
    object-fit: cover;
    border-radius: 50px;
  }
`;
