import React, { memo } from 'react';
import { Container } from './styles';

import { useObservable } from 'react-use-observable';


const Root: React.FC = () => {
  const [job] = useObservable<IJob>(() => jobService.loadTransaction('3c2be1d7-0bae-4578-993f-9f010595909a'), []);

  if (!job) {
    return null;
  }

  return (
    <Container>
      <span>{job.title}</span>
      <p>{job.description}</p>
    </Container>
  );

}

export default memo(Root);