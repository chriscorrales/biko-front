import React, { memo, PropsWithChildren } from 'react';

interface IProps {
  condition: boolean;
}
const If: React.FC<PropsWithChildren<IProps>> = ({ condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }

  return null;
};

export default memo(If);
