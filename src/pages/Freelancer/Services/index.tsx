import React, { memo } from 'react';

import { useObservable } from 'react-use-observable';
import { Row, Col, Input } from 'antd';
import { IVacancy } from 'interface/Vacancy';
import VacancyCard from 'components/VacancyCard';
import { vacancyService } from 'services/vacancyService';
import { Container } from './styles';

const ServicesPage: React.FC = () => {
  const [vacancies] = useObservable<IVacancy[]>(
    () => vacancyService.getJobs(),
    []
  );

  if (!vacancies) {
    return null;
  }

  return (
    <Container>
      <Input.Search
        style={{ marginBottom: 24 }}
        size="large"
        placeholder="Pesquise aqui"
      />
      <Row gutter={[24, 24]}>
        {vacancies.map((vacancy) => (
          <Col style={{ height: 350 }} span={6}>
            <VacancyCard vacancy={vacancy} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default memo(ServicesPage);
