import React from 'react';
import { Steps } from 'antd';
import Key from 'mdi-react/KeyIcon';
import Home from 'mdi-react/HomeIcon';
import Briefcase from 'mdi-react/BriefcaseIcon';
import LinkVariantIcon from 'mdi-react/LinkVariantIcon';
import Account from 'mdi-react/AccountIcon';
import { useObservable } from 'react-use-observable';
import { stepService } from '../stepsServices';

const steps = [
  {
    title: 'Dados Pessoais',
    icon: <Account />,
  },
  {
    title: 'Endereço',
    icon: <Home />,
  },
  {
    title: 'Perfil de Conta',
    icon: <Briefcase />,
  },
  {
    title: 'Links',
    icon: <LinkVariantIcon />,
  },
  {
    title: 'Acesso',
    icon: <Key />,
  },
];

const StepsVertical: React.FC = () => {
  const [current] = useObservable(() => stepService.getCurrentStep(), []);

  if (typeof current !== 'number') {
    return null;
  }

  return (
    <Steps
      current={current}
      direction="vertical"
      size="small"
      style={{ height: '100%' }}
    >
      {steps.map((step) => (
        <Steps.Step key={step.title} title={step.title} icon={step.icon} />
      ))}
    </Steps>
  );
};

export default StepsVertical;
