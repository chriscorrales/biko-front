import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { stepService } from '../stepsServices';
import { Container } from './styles';

const AddressStep: React.FC = () => {
  return (
    <Container>
      <div>
        <Form.Item label="CEP">
          <Input type="text" maxLength={9} />
        </Form.Item>
        <Row gutter={8}>
          <Col span={19}>
            <Form.Item label="Endereço">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Número">
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Bairro">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Complemento">
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Estado">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Cidade">
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
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

export default AddressStep;
