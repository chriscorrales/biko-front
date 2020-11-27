import React, { memo, useState } from 'react';

import { enStatus, IJob } from 'interface/Job';
import { Button, Space, Typography } from 'antd';
import AvatarGroup from 'components/Avatar';
import CalendarBlankOutlineIcon from 'mdi-react/CalendarBlankOutlineIcon';
import PencilOutlineIcon from 'mdi-react/PencilOutlineIcon';
import { formatDistance, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Status from 'components/shared/Status';
import If from 'components/shared/If';
import FreelancerSelectModal from 'components/FreelancerSelectModal';
import JobModal from 'components/JobModal';
import FreelancerInformation from 'components/FreelancerInformation';
import { Container, DateCreate, EmptyFreelance, Footer, Title } from './styles';
import ButtonIcon from '../shared/ButtonIcon/index';

interface IProps {
  job: IJob;
}

const JobCard: React.FC<IProps> = ({ job }) => {
  const [openCandidateModal, setOpenCandidateModal] = useState(false);
  const [openJobModal, setOpenJobModal] = useState(false);
  const [openFreelancerInformation, setOpenFreelancerInformation] = useState(
    false
  );

  const date = formatDistance(
    subDays(new Date(job.createDate), 0),
    new Date(),
    {
      locale: ptBR,
    }
  );

  return (
    <Container>
      <Space direction="vertical" style={{ height: '65%' }}>
        <DateCreate>
          <Title>{job.title}</Title>
          <ButtonIcon onClick={() => setOpenJobModal(true)}>
            <PencilOutlineIcon size="20" color="#20d7b2" />
          </ButtonIcon>
        </DateCreate>
        <Status status={job.status} />
        <Typography.Paragraph
          style={{ textAlign: 'justify' }}
          ellipsis={{ rows: 6, expandable: true, symbol: 'more' }}
        >
          {job.description}
        </Typography.Paragraph>
      </Space>
      <Footer>
        <DateCreate>
          <CalendarBlankOutlineIcon size="18" style={{ marginRight: 5 }} />
          <Typography.Paragraph style={{ margin: 0 }}>
            {date}
          </Typography.Paragraph>
        </DateCreate>
        <AvatarGroup
          freelancers={
            job.selecteds?.length !== 0 ? job?.selecteds : job?.freelancers
          }
        />
      </Footer>
      <If condition={job.freelancers.length === 0}>
        <EmptyFreelance>Nenhum autônomo(a) se candidatou ainda</EmptyFreelance>
      </If>
      <If condition={job.selecteds?.length !== 0}>
        <Button onClick={() => setOpenFreelancerInformation(true)}>
          Ver informações de contato
        </Button>
      </If>
      <If
        condition={
          job.status === enStatus.OPEN_ENDED && job.freelancers.length !== 0
        }
      >
        <Button onClick={() => setOpenCandidateModal(true)}>
          Escolher candidatos
        </Button>
      </If>
      <FreelancerSelectModal
        key={job.id}
        job={job}
        cancel={() => setOpenCandidateModal(false)}
        visible={openCandidateModal}
        onCancel={() => setOpenCandidateModal(false)}
      />
      <JobModal
        job={job}
        cancel={() => setOpenJobModal(false)}
        type="update"
        visible={openJobModal}
        onCancel={() => setOpenJobModal(false)}
      />
      <FreelancerInformation
        selecteds={job.selecteds}
        visible={openFreelancerInformation}
        onCancel={() => setOpenFreelancerInformation(false)}
      />
    </Container>
  );
};

export default memo(JobCard);
