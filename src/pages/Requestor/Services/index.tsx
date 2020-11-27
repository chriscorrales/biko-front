import React, { memo } from 'react';

import { useObservable } from 'react-use-observable';
import { IJob } from 'interface/Job';
import { jobService } from 'services/jobService';
import { Row, Col, Input, Spin } from 'antd';
import JobCard from 'components/JobCard';
import { Container, ContainerCenter } from './styles';

const ServicesPage: React.FC = () => {
  const [jobs] = useObservable<IJob[]>(() => jobService.getJobs(), []);

  if (!jobs) {
    return (
      <ContainerCenter>
        <Spin tip="Carregando..." />
      </ContainerCenter>
    );
  }

  return (
    <Container>
      <Input.Search
        style={{ marginBottom: 24 }}
        size="large"
        placeholder="Pesquise aqui"
      />
      <Row gutter={jobs.length > 1 ? [24, 24] : {}}>
        {jobs.map((job) => (
          <Col span={jobs.length > 1 ? 8 : 18}>
            <JobCard job={job} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default memo(ServicesPage);
