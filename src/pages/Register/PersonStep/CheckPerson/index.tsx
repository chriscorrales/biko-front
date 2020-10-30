/* eslint-disable jsx-a11y/label-has-associated-control */
import RequestorIcon from 'components/shared/icons/Requestor';
import React from 'react';

import { Container } from './styles';

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  optionText: string;
  svg: React.ReactNode;
  keyCb: string;
}

const CheckPerson: React.FC<IProps> = (props) => {
  const { keyCb, optionText, svg } = props;

  return (
    <Container>
      <input {...props} type="checkbox" id={keyCb} />
      <label htmlFor={keyCb}>
        {svg}
        <p>{optionText}</p>
      </label>
    </Container>
  );
};
export default CheckPerson;
