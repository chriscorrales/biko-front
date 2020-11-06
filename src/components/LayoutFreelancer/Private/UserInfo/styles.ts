import styled from 'styled-components';

export const User = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;

export const UserInformation = styled.div`
  & p {
    color: #fff;
    font-size: 1em;
    line-height: normal;
    margin: 0;
  }

  & span {
    color: #20d7b2;
    font-size: 1em;
    margin: 0;
    display: flex;
    align-items: center;
    line-height: 0;

    svg {
      width: 16px;
      margin-right: 4px;
    }
  }
`;
export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, #20d4b1 0%, #0f4b9c 186.42%);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 85%;
    height: 85%;
    object-fit: cover;
    border-radius: 50px;
  }
`;
