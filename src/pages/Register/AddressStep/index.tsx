import { Button, Col, Form, Input, Row } from 'antd';
import Field from 'components/shared/Field';
import React from 'react';
import { stepService } from '../stepsServices';
import { Container } from './styles';

interface IProps {
  display: boolean;
}

const AddressStep: React.FC<IProps> = ({ display }) => {
  return (
    <Container style={display ? {} : { display: 'none' }}>
      <div>
        <Field
          name="address.postalCode"
          formItemProps={{ label: 'CEP' }}
          inputProps={{
            type: 'text',
            placeholder: 'Insira o CEP do enderço',
          }}
        />
        <Row gutter={8}>
          <Col span={19}>
            <Field
              name="address.street"
              formItemProps={{ label: 'Endereço' }}
              inputProps={{
                type: 'text',
                placeholder: 'Insira o nome da rua ou avenida',
              }}
            />
          </Col>
          <Col span={5}>
            <Field
              name="address.residenceNumber"
              formItemProps={{ label: 'Número' }}
              inputProps={{
                type: 'text',
                placeholder: 'Nº da Casa',
              }}
            />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Field
              name="address.district"
              formItemProps={{ label: 'Bairro' }}
              inputProps={{
                type: 'text',
                placeholder: 'Digite o bairro',
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="address.complement"
              formItemProps={{ label: 'Complemento' }}
              inputProps={{
                type: 'text',
                placeholder: 'Ex. Apto 1',
              }}
            />
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={12}>
            <Field
              name="address.state"
              formItemProps={{ label: 'Estado' }}
              inputProps={{
                type: 'text',
                placeholder: 'Digite o estado',
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="address.city"
              formItemProps={{ label: 'Cidade' }}
              inputProps={{
                type: 'text',
                placeholder: 'Digite a cidade',
              }}
            />
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
