import { Button, Col, Form, Row } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import React from 'react';
import InboxArrowDown from 'mdi-react/InboxArrowDownIcon';
import { stepService } from '../stepsServices';
import { Container } from './styles';

const DocumentStep: React.FC = () => {
  return (
    <Container>
      <Form.Item label="Foto do Documento">
        <Dragger style={{ padding: 16 }}>
          <p className="ant-upload-drag-icon">
            <InboxArrowDown size={35} />
          </p>
          <p className="ant-upload-text">
            Clique ou arraste o arquivo para esta área para fazer o upload
          </p>
        </Dragger>
      </Form.Item>
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

export default DocumentStep;
