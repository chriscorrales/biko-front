/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { Button, message, Modal } from 'antd';
import CheckboxFreelancer from 'components/CheckboxFreelancer';
import { ModalProps } from 'antd/lib/modal';
import { useForm, FormProvider } from 'react-hook-form';
import If from 'components/shared/If';
import { IJob } from 'interface/Job';
import { jobService } from 'services/jobService';
import { ButtonContainer, Subtitle } from './styles';
import { selectedCandidatesService } from './service';

interface IProps extends ModalProps {
  job: IJob;
  cancel: () => void;
}

const FreelancerSelectModal: React.FC<IProps> = ({
  visible = false,
  onCancel,
  job,
  cancel,
}) => {
  const { vacancies } = job;
  const methods = useForm();
  const [hasError, setHasError] = useState(false);
  const [currency, setCurrency] = useState(0);
  const setStep = (step: number) => {
    if (step >= 0 && step <= vacancies.length - 1) {
      setCurrency(step);
    }
  };

  const submitForm = (values: any) => {
    const newArray = Object.keys(values.vacancy).map((vacancy) => {
      return {
        vacancy: { id: vacancy },
        selected: new Array(values.vacancy[vacancy]).flat(2),
      };
    });

    selectedCandidatesService.selectedCandidates(newArray).subscribe(() => {
      cancel();
      jobService.loadJobs();
      message.success('Candidatos selecionados');
    });
  };

  const validForm = () => {
    const vancacies: string[] = methods.watch<string, string[]>(
      `vacancy[${vacancies[currency].id}]`
    );

    if (vancacies.length !== vacancies[currency].amount) {
      setHasError(true);
      return;
    }

    setStep(currency + 1);
    setHasError(false);
  };

  return (
    <Modal
      title="Selecionar candidatos"
      visible={visible}
      onCancel={onCancel}
      destroyOnClose
      footer={null}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm)}>
          {vacancies.map((vacancy, index) => {
            return (
              <div
                key={vacancy.id}
                style={index !== currency ? { display: 'none' } : {}}
              >
                <Subtitle>
                  {`Escolha ${vacancy.amount} candidatos para a vaga de ${vacancy?.category?.name}.`}
                </Subtitle>
                {vacancy?.freelancers?.map((candidate) => (
                  <CheckboxFreelancer
                    name={`vacancy[${vacancy.id}]`}
                    key={`${vacancy.id}/${candidate.id}`}
                    candidate={candidate}
                    keyCb={`${vacancy.id}/${candidate.id}`}
                  />
                ))}
              </div>
            );
          })}

          {hasError && (
            <div
              style={{ marginTop: 8 }}
              className="ant-form-item-explain ant-form-item-explain-error"
            >
              Escolha somente {vacancies[currency].amount} candidatos
            </div>
          )}

          <ButtonContainer>
            <If condition={currency > 0}>
              <Button
                style={{ marginRight: 10 }}
                onClick={() => setStep(currency - 1)}
                key="back"
              >
                Voltar
              </Button>
            </If>
            <If condition={currency === vacancies.length - 1}>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </If>
            <If condition={currency !== vacancies.length - 1}>
              <Button onClick={validForm} type="primary">
                Proxímo
              </Button>
            </If>
          </ButtonContainer>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default React.memo(FreelancerSelectModal);
