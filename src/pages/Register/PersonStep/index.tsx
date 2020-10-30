import { Button, Col, Row } from 'antd';
import FreelancerIcon from 'components/shared/icons/Freelancer';
import RequestorIcon from 'components/shared/icons/Requestor';
import React from 'react';
import { stepService } from '../stepsServices';
import CheckPerson from './CheckPerson';
import { Container, SelectPerson } from './styles';

const PersonStep: React.FC = () => {
  return (
    <Container>
      <SelectPerson>
        <CheckPerson
          optionText="Solicitante"
          keyCb="cb-requestor"
          svg={<RequestorIcon />}
        />
        <CheckPerson
          optionText="Freelancer"
          keyCb="cb-freelancer"
          svg={<FreelancerIcon />}
        />
      </SelectPerson>
      <Row gutter={8} justify="space-between">
        <Col span={10}>
          <Button block onClick={stepService.prev}>
            Voltar
          </Button>
        </Col>
        <Col span={14} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" ghost block onClick={stepService.next}>
            Próximo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonStep;
