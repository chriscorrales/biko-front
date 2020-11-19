import React, { useState } from 'react';

import { Button, message, Modal } from 'antd';
import CheckboxFreelancer from 'components/CheckboxFreelancer';
import { ModalProps } from 'antd/lib/modal';
import { useForm, FormProvider } from 'react-hook-form';
import If from 'components/shared/If';
import { IJob } from 'interface/Job';
import { Subtitle } from './styles';

interface IProps extends ModalProps {
  job: IJob;
}

const FreelancerSelectModal: React.FC<IProps> = ({
  visible = false,
  onCancel,
  job,
}) => {
  const { vacancies } = job;
  const methods = useForm();
  const [currency, setCurrency] = useState(0);
  const setStep = (step: number) => {
    if (step >= 0 && step <= vacancies.length - 1) {
      setCurrency(step);
    }
  };

  const submitForm = () => {
    console.log('MANDEI');
    message.success('Candidatos selecionados');
  };

  return (
    <Modal
      title="Selecionar candidatos"
      visible={visible}
      onCancel={onCancel}
      destroyOnClose
      footer={[
        <If condition={currency > 0}>
          <Button onClick={() => setStep(currency - 1)} key="back">
            Voltar
          </Button>
        </If>,
        <Button
          onClick={
            currency === vacancies.length - 1
              ? () => submitForm()
              : () => setStep(currency + 1)
          }
          key="submit"
          type="primary"
        >
          {currency === vacancies.length - 1 ? 'Enviar' : 'Proxímo'}
        </Button>,
      ]}
    >
      <FormProvider {...methods}>
        {vacancies.map((vacancy, index) => {
          return (
            <div style={index !== currency ? { display: 'none' } : {}}>
              <Subtitle>
                {`Escolha ${vacancy.amount} candidatos para a vaga de ${vacancy?.category?.name}.`}
              </Subtitle>
              {vacancy?.freelancers?.map((candidate) => (
                <CheckboxFreelancer
                  candidate={candidate}
                  keyCb={`${vacancy.id}/${candidate.id}`}
                />
              ))}
            </div>
          );
        })}
      </FormProvider>
    </Modal>
  );
};

export default React.memo(FreelancerSelectModal);
