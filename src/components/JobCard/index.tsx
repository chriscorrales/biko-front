import React, { memo } from 'react';

import { IJob } from 'interface/Job';
import Status from 'components/shared/Status';
import { Space, Typography } from 'antd';
import AvatarGroup from 'components/Avatar';
import { Container, Footer, Title } from './styles';

interface IProps {
  job: IJob;
}

const JobCard: React.FC<IProps> = ({ job }) => {
  return (
    <Container>
      <Space direction="vertical">
        <Title>{job.title}</Title>
        <Status status={job.status} />
        <Typography.Paragraph
          style={{ textAlign: 'justify' }}
          ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        >
          {job.description}
        </Typography.Paragraph>
      </Space>
      <Footer>
        <div />
        <AvatarGroup freelancers={job.freelancers} />
      </Footer>
    </Container>
  );
};

export default memo(JobCard);
