import { Col, Form, message } from 'antd';
import React from 'react';
import { useObservable } from 'react-use-observable';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import StepsVertical from './Steps';
import { BackgroundGradientRow, Card } from './styles';
import ProfileStep from './ProfileStep';
import AddressStep from './AddressStep/index';
import PersonStep from './PersonStep/index';
import AcessStep from './AcessStep';
import { enStep, stepService } from './stepsServices';
import LinkStep from './LinkStep';
import { registerService } from './registerService';

const Register: React.FC = () => {
  const [current] = useObservable(() => stepService.getCurrentStep(), []);
  const history = useHistory();
  const submitForm = (values: any) => {
    registerService.createUser(values).subscribe(() => {
      message.success('Conta criada com sucesso');
      history.push('/');
    });
  };
  const methods = useForm({
    shouldFocusError: true,
    mode: 'onBlur',
  });

  if (typeof current !== 'number') {
    return null;
  }

  return (
    <BackgroundGradientRow
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col span={10} style={{ height: '100%', maxHeight: 550 }}>
        <Card justify="start" align="top" style={{ height: '100%' }}>
          <Col span={8} style={{ height: '100%' }}>
            <StepsVertical />
          </Col>
          <Col span={16} style={{ height: '100%' }}>
            <FormProvider {...methods}>
              <Form
                onFinish={methods.handleSubmit(submitForm)}
                style={{ height: '100%' }}
                layout="vertical"
              >
                <ProfileStep display={current === enStep.PROFILE} />
                <AddressStep display={current === enStep.ADDRESS} />
                <PersonStep display={current === enStep.PERSON} />
                <LinkStep display={current === enStep.LINK} />
                <AcessStep display={current === enStep.ACESS} />
              </Form>
            </FormProvider>
          </Col>
        </Card>
      </Col>
    </BackgroundGradientRow>
  );
};

export default Register;
