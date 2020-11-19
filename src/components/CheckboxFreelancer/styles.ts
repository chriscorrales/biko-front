import styled from 'styled-components';
import { Typography } from 'antd';

export const Button = styled.div`
  width: 10%;
  position: relative;
  height: 84px;
  max-height: 84px;
  cursor: pointer;
  justify-content: center;
  background-color: #20d7b2;
  border: 1px solid #dddddd;
  border-left: none;
  border-radius: 0 3px 3px 0;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #2aa48f;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

  .unselected {
    display: flex;
    justify-content: center;
    padding: 10px;
    align-items: center;
    width: 100%;
  }

  .selected {
    display: none;
  }

  & svg {
    fill: #eee;
  }

  &:after {
    content: '';
    display: table;
    clear: both;
  }

  input {
    display: none;

    &:checked + label {
      border: 1px solid #20d7b2;

      & .selected {
        position: absolute;
        z-index: 10;
        width: 423px;
        height: 82px;
        display: flex;
        justify-content: center;
        padding: 10px;
        align-items: center;
        background: linear-gradient(
          138.18deg,
          rgba(32, 215, 178, 0.9) 0%,
          rgba(15, 76, 156, 0.9) 100%
        );

        & p {
          margin-left: 5px;
        }
      }

      & p,
      span {
        color: #fff;
      }
    }
  }

  label {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 90%;

    flex-flow: row nowrap;
    border: 1px solid #dddddd;
    border-radius: 3px 0 0 3px;

    background: #3c444d;

    cursor: pointer;

    &:hover {
      border: 1px solid #ccc;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
    }

    p {
      margin: 0;
    }
  }
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

export const Name = styled.h1`
  color: #20d7b2;
  font-size: 1.2em;
  margin: 0;
  line-height: 112%;
  font-style: normal;
  font-weight: normal;
`;

export const Description = styled(Typography.Paragraph)`
  margin: 0 !important;
  color: #cbcfd4;
  font-size: 1em;
`;
