import { enStatus } from 'interface/Job';
import React from 'react';

import { Circle, Container, Text } from './styles';

interface IProps {
  status: enStatus;
}

const textView = {
  [enStatus.OPEN_ENDED]: 'Em aberto',
  [enStatus.IN_PROGRESS]: 'Em progresso',
  [enStatus.FINISHED]: 'Finalizado',
  [enStatus.CANCELLED]: 'Cancelado',
};

const colorView = {
  [enStatus.OPEN_ENDED]: '#F2C94C',
  [enStatus.IN_PROGRESS]: '#2F80ED',
  [enStatus.FINISHED]: '#27AE60',
  [enStatus.CANCELLED]: '#EB5757',
};

const Status: React.FC<IProps> = ({ status }) => {
  return (
    <Container color={colorView[status]}>
      <Circle />
      <Text>{textView[status]}</Text>
    </Container>
  );
};

export default Status;
