import { ButtonProps } from 'antd/lib/button';
import React from 'react';
import { Button } from './styles';

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonIcon: React.FC<IProps> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonIcon;
