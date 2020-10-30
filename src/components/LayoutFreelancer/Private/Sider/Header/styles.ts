import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 200px;
  background: #3c444d;
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 200px;
  height: 92px;
  display: flex;

  justify-content: space-between;
  border-bottom: 1px #30363d solid;
  align-items: flex-end;
  padding: 24px;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  justify-content: space-between;
`;

export const UserInformation = styled.div`
  width: 50%;
  & p {
    color: #fff;
    font-size: 1em;
    hyphens: manual;
    line-height: normal;
    word-break: break-all;
    margin: 0;
  }

  & span {
    color: #20d7b2;
    font-size: 1em;
    margin: 0;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      margin-right: 4px;
    }
  }
`;

export const UserImage = styled.div`
  width: 65px;
  height: 65px;
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
