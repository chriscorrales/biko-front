import { Button, Col, Form, Input, Radio, Row } from 'antd';
import Field from 'components/shared/Field';
import React from 'react';
import { stepService } from '../stepsServices';
import { Container } from './styles';

interface IProps {
  display: boolean;
}

const ProfileStep: React.FC<IProps> = ({ display }) => {
  return (
    <Container style={display ? {} : { display: 'none' }}>
      <div>
        <Field
          name="people.fullName"
          formItemProps={{ label: 'Nome Completo' }}
          inputProps={{
            type: 'text',
            placeholder: 'Digite o nome e sobrenome',
          }}
        />
        <Field
          name="people.birthdayDate"
          formItemProps={{ label: 'Data de nascimento' }}
          inputProps={{
            type: 'text',
            placeholder: 'Digite sua data de nascimento. xx/xx/xxxx',
          }}
        />
        <Field
          name="people.image"
          formItemProps={{ label: 'Imagem de perfil (URL)' }}
          inputProps={{
            type: 'text',
            placeholder: 'Coloque aqui a URL da imagem para perfil',
          }}
        />

        <Field
          name="people.phone"
          formItemProps={{ label: 'Telefone' }}
          inputProps={{
            type: 'text',
            placeholder: 'Digite o telefone. (99) 99999-999',
          }}
        />
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
