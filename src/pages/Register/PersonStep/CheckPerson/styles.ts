import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
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

      & svg {
        fill: #20d7b2;
      }

      & p,
      span {
        color: #20d7b2;
      }
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    width: 130px;
    height: 155px;

    border: 1px solid #dddddd;
    border-radius: 3px;
    padding: 10px;

    text-align: center;

    background: #3c444d;

    cursor: pointer;

    transition: box-shadow 0.15s linear, transform 0.15s linear;

    &:hover {
      border: 1px solid #ccc;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
      transition: box-shadow 0.15s linear, transform 0.15s linear;
    }

    p {
      margin: 0;
    }
  }
`;
