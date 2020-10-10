import React, { memo } from 'react';

import { useObservable } from 'react-use-observable';
import { IJob } from 'interface/Job';
import { jobService } from 'services/jobService';
import { Row, Col } from 'antd';
import JobCard from 'components/JobCard';
import { Container } from './styles';

const Root: React.FC = () => {
  const [jobs] = useObservable<IJob[]>(
    () => jobService.loadTransaction('3c2be1d7-0bae-4578-993f-9f010595909a'),
    []
  );

  if (!jobs) {
    return null;
  }

  return (
    <Container>
      <Row gutter={[16, 16]}>
        {jobs.map((job) => (
          <Col span={8}>
            <JobCard job={job} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default memo(Root);
