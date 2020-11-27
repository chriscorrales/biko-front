import { Button, Col, Row } from 'antd';
import React from 'react';
import Field from 'components/shared/Field';
import { stepService } from '../stepsServices';
import { Container } from './styles';

interface IProps {
  display: boolean;
}

const LinkStep: React.FC<IProps> = ({ display }) => {
  return (
    <Container style={display ? {} : { display: 'none' }}>
      <div>
        <Field
          name="people.github"
          formItemProps={{ label: 'Github' }}
          inputProps={{
            type: 'text',
            placeholder: 'URL do seu perfil do Github',
          }}
        />
        <Field
          name="people.linkedin"
          formItemProps={{ label: 'Linkedin' }}
          inputProps={{
            type: 'text',
            placeholder: 'URL do seu perfil do Linkedin',
          }}
        />
        <Field
          name="people.facebook"
          formItemProps={{ label: 'Facebook' }}
          inputProps={{
            type: 'text',
            placeholder: 'URL do seu perfil do Facebook',
          }}
        />
      </div>
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

export default LinkStep;
