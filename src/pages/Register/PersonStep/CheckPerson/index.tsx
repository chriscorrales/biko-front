import React from 'react';
import { useFormContext } from 'react-hook-form';

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
  const { register } = useFormContext();

  return (
    <Container>
      <input ref={register} {...props} type="checkbox" id={keyCb} />
      <label htmlFor={keyCb}>
        {svg}
        <p>{optionText}</p>
      </label>
    </Container>
  );
};
export default CheckPerson;
