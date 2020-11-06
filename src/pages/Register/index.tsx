import { Col, Form } from 'antd';
import React from 'react';
import { useObservable } from 'react-use-observable';
import StepsVertical from './Steps';
import { BackgroundGradientRow, Card } from './styles';
import DocumentStep from './DocumentStep/index';
import ProfileStep from './ProfileStep';
import AddressStep from './AddressStep/index';
import PersonStep from './PersonStep/index';
import AcessStep from './AcessStep';
import { enStep, stepService } from './stepsServices';

const Register: React.FC = () => {
  const [current] = useObservable(() => stepService.getCurrentStep(), []);

  if (typeof current !== 'number') {
    return null;
  }

  const step = {
    [enStep.PROFILE]: <ProfileStep />,
    [enStep.DOCUMENT]: <DocumentStep />,
    [enStep.ADDRESS]: <AddressStep />,
    [enStep.PERSON]: <PersonStep />,
    [enStep.ACESS]: <AcessStep />,
  };

  return (
    <BackgroundGradientRow
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col span={10} style={{ height: 450 }}>
        <Card justify="start" align="top" style={{ height: '100%' }}>
          <Col span={8} style={{ height: '100%' }}>
            <StepsVertical />
          </Col>
          <Col span={16} style={{ height: '100%' }}>
            <Form style={{ height: '100%' }} layout="vertical">
              {step[current]}
            </Form>
          </Col>
        </Card>
      </Col>
    </BackgroundGradientRow>
  );
};

export default Register;
