import { Button, Col, Form, Input, Radio, Row } from 'antd';
import React from 'react';
import { stepService } from '../stepsServices';
import { Container } from './styles';

const ProfileStep: React.FC = () => {
  return (
    <Container>
      <div>
        <Form.Item label="Nome Completo">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Data de Nascimento">
          <Input type="date" />
        </Form.Item>
        <Form.Item label="Sexo">
          <Radio.Group>
            <Radio value="male">Masculino</Radio>
            <Radio value="female">Feminino</Radio>
            <Radio value="outer">Outro</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
      <Row gutter={8} justify="space-between">
        <Col span={10} />
        <Col span={14} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" ghost block onClick={stepService.next}>
            Próximo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileStep;
