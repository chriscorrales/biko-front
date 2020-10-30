import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { stepService } from '../stepsServices';
import { Container } from './styles';

const AcessStep: React.FC = () => {
  return (
    <Container>
      <div>
        <Form.Item label="E-mail">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Senha">
          <Input.Password type="password" />
        </Form.Item>
        <Form.Item label="Confirme sua senha">
          <Input.Password type="password" />
        </Form.Item>
        <Form.Item label="Celular">
          <Input type="tel" />
        </Form.Item>
      </div>

      <Row gutter={8} justify="space-between">
        <Col span={10}>
          <Button block onClick={stepService.prev}>
            Voltar
          </Button>
        </Col>
        <Col span={14} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" ghost block onClick={stepService.next}>
            Finalizar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AcessStep;
