import { ModalProps } from 'antd/lib/modal';
import { IJob } from 'interface/Job';
import React, { useEffect, useState } from 'react';
import Field from 'components/shared/Field';

// import { Container } from './styles';
import { Button, Checkbox, Col, Form, message, Modal, Row, Select } from 'antd';

import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useObservable } from 'react-use-observable';
import TrashCanIcon from 'mdi-react/TrashCanIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import { jobModalService, JobSchema } from './jobService';
import SelectField from '../shared/Select/index';

interface IProps extends ModalProps {
  job?: IJob;
  type: 'create' | 'update';
  cancel?: () => void;
}

const JobModal: React.FC<IProps> = ({
  visible = false,
  onCancel,
  job,
  type,
}) => {
  const methods = useForm({
    shouldFocusError: true,
    defaultValues: { ...job },
    resolver: yupResolver(JobSchema),
    mode: 'onBlur',
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'vacancies',
  });

  const [hasAddress, setHasAddress] = useState(!!job?.address);

  const addVacancy = () => {
    append({ amount: 1 });
  };

  const removeVacancy = () => {
    remove(fields.length - 1);
  };

  const [categories] = useObservable(
    () => jobModalService.listCategories(),
    []
  );
  const [loading] = useState(!!categories);

  useEffect(() => {
    if (!job) {
      addVacancy();
    }
  }, [job]);

  const updateSubmit = () => {
    message.success('Alterado com sucesso');
  };

  const createSubmit = () => {
    message.success('Criado com sucesso');
  };

  return (
    <Modal
      title={type === 'create' ? 'Cadastrar um serviço' : 'Alterar Serviço'}
      visible={visible}
      onCancel={onCancel}
      destroyOnClose
      footer={[
        <Button onClick={onCancel} key="cancel">
          Cancelar
        </Button>,
        <Button
          onClick={type === 'create' ? createSubmit : updateSubmit}
          key="submit"
          type="primary"
        >
          {type === 'create' ? 'Cadastrar' : 'Alterar'}
        </Button>,
      ]}
    >
      <FormProvider {...methods}>
        <Form
          layout="vertical"
          onFinish={methods.handleSubmit(
            type === 'create' ? createSubmit : updateSubmit
          )}
        >
          <Row gutter={8} justify="space-between">
            <Col span={24}>
              <Field
                name="title"
                formItemProps={{ label: 'Título' }}
                inputProps={{
                  type: 'text',
                  placeholder:
                    'Coloque um título para o serviço. Max 60 caracteres',
                }}
              />
            </Col>
            <Col span={24}>
              <Field
                name="description"
                formItemProps={{ label: 'Descrição' }}
                type="textarea"
                textAreaProps={{
                  placeholder:
                    'Digite a descrição do serviço. Max 255 caracteres',
                  allowClear: true,
                }}
              />
            </Col>
            <Col span={24} style={{ marginBottom: 24 }}>
              <Checkbox
                name="hasAddress"
                onChange={(value) => setHasAddress(value.target.checked)}
                value={hasAddress}
              >
                Possui endereço?
              </Checkbox>
            </Col>

            {hasAddress && (
              <>
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
              </>
            )}

            {fields.map((item, index) => (
              <Row
                gutter={8}
                key={item.id}
                justify="space-between"
                style={{ width: '100%' }}
              >
                <Col span={18}>
                  <SelectField
                    formItemProps={index === 0 ? { label: 'Categoria' } : {}}
                    selectProps={{
                      loading,
                      defaultValue: item.category?.id,
                      placeholder: 'Selecione a categoria da vaga',
                    }}
                    name={`vacancies[${index}].category.id`}
                  >
                    {categories?.map((category) => (
                      <Select.Option key={category.id} value={category.id}>
                        {category.name}
                      </Select.Option>
                    ))}
                  </SelectField>
                </Col>
                <Col span={6}>
                  <Field
                    name={`vacancies[${index}].amount`}
                    formItemProps={
                      index === 0 ? { label: 'Total de vagas' } : {}
                    }
                    numberProps={{
                      defaultValue: item.amount,
                      max: 10,
                      min: 1,
                    }}
                    type="number"
                  />
                </Col>
              </Row>
            ))}

            <Col
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
              span={24}
            >
              <Button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onClick={removeVacancy}
                icon={<TrashCanIcon style={{ marginRight: 5 }} />}
              >
                Remover vaga
              </Button>
              <Button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                icon={<PlusIcon style={{ marginRight: 5 }} />}
                onClick={addVacancy}
              >
                Adicionar vaga
              </Button>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default React.memo(JobModal);
