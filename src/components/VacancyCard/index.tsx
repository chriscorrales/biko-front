import React, { memo, useState } from 'react';

import { Button, Space, Typography, message } from 'antd';
import CalendarBlankOutlineIcon from 'mdi-react/CalendarBlankOutlineIcon';
import { formatDistance, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import JobInformation from 'components/JobInformation';
import { useObservable } from 'react-use-observable';
import { userService } from 'services/userService';
import { vacancyService } from 'services/vacancyService';
import { Container, DateCreate, Footer, Title } from './styles';
import { IVacancy } from '../../interface/Vacancy';

interface IProps {
  vacancy: IVacancy;
}

const VacancyCard: React.FC<IProps> = ({ vacancy }) => {
  const [open, setOpen] = useState(false);

  const subscribe = (id: string | undefined) => {
    if (!id) {
      return;
    }

    vacancyService.subscribeAndUnsubscribe(id).subscribe(() => {
      message.success(
        vacancy.hasCandidate
          ? 'Sua inscriçao foi cancelada'
          : 'Você se candidatou a vaga'
      );
      vacancyService.loadJobsByCategory();
    });
  };

  const date = formatDistance(
    subDays(new Date(vacancy.job.createDate), 0),
    new Date(),
    {
      locale: ptBR,
    }
  );

  return (
    <Container>
      <Space direction="vertical" style={{ height: '65%' }}>
        <DateCreate>
          <Title>{vacancy.job.title}</Title>
        </DateCreate>
        <p style={{ color: '#7ea8df' }}>{vacancy.category?.name}</p>
        <Typography.Paragraph
          style={{ textAlign: 'justify' }}
          ellipsis={{ rows: 6, expandable: true, symbol: 'more' }}
        >
          {vacancy.job.description}
        </Typography.Paragraph>
      </Space>
      <Footer>
        <DateCreate>
          <CalendarBlankOutlineIcon size="18" style={{ marginRight: 5 }} />
          <Typography.Paragraph style={{ margin: 0 }}>
            {date}
          </Typography.Paragraph>
        </DateCreate>
      </Footer>
      <Button onClick={() => setOpen(true)} style={{ marginBottom: 10 }}>
        Ver mais informações
      </Button>
      <Button
        type="primary"
        onClick={() => subscribe(vacancy.id)}
        style={vacancy.hasCandidate ? { backgroundColor: '#ff5f67' } : {}}
      >
        {vacancy.hasCandidate ? 'Cancelar candidatura' : 'Candidatar-se'}
      </Button>
      <JobInformation
        visible={open}
        onCancel={() => setOpen(false)}
        job={vacancy.job}
      />
    </Container>
  );
};

export default memo(VacancyCard);
