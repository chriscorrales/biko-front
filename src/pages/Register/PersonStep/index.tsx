import { Button, Col, Row, Select } from 'antd';
import ButtonIcon from 'components/shared/ButtonIcon';
import FreelancerIcon from 'components/shared/icons/Freelancer';
import RequestorIcon from 'components/shared/icons/Requestor';
import SelectField from 'components/shared/Select';
import React, { useState } from 'react';
import TrashCanIcon from 'mdi-react/TrashCanIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { jobModalService } from 'components/JobModal/jobService';
import { useObservable } from 'react-use-observable';
import If from 'components/shared/If';
import Field from 'components/shared/Field';
import { stepService } from '../stepsServices';
import CheckPerson from './CheckPerson';
import { Container, Label, SelectPerson } from './styles';

interface IProps {
  display: boolean;
}

const PersonStep: React.FC<IProps> = ({ display }) => {
  const { control, errors } = useFormContext();
  const [openInput, setOpenInput] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categorys',
  });
  const [categories] = useObservable(
    () => jobModalService.listCategories(),
    []
  );

  const addCategory = () => {
    if (fields.length < 2) {
      append({});
    }
  };

  const removeCategory = (index: number) => {
    remove(index);
  };

  const openInputCategorys = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      append({});
      setOpenInput(true);
    } else {
      setOpenInput(false);
      remove();
    }
  };

  const [loading] = useState(!!categories);

  return (
    <Container style={display ? {} : { display: 'none' }}>
      <div>
        <Label>Selecione o perfil da sua conta</Label>
        <SelectPerson>
          <CheckPerson
            optionText="Solicitante"
            name="requestorCreate"
            keyCb="requestor"
            svg={<RequestorIcon />}
          />
          <CheckPerson
            optionText="Freelancer"
            name="freelancerCreate"
            onChange={openInputCategorys}
            keyCb="freelancer"
            svg={<FreelancerIcon />}
          />
        </SelectPerson>

        <If condition={openInput}>
          {fields.map((item, index) => {
            return (
              <Row
                gutter={8}
                key={item.id}
                justify="space-between"
                align={index === 0 ? undefined : 'top'}
                style={{ width: '100%', marginTop: 8 }}
              >
                <Col span={18}>
                  <SelectField
                    formItemProps={
                      index === 0
                        ? { label: 'Selecione quais trabalhos você faz' }
                        : {}
                    }
                    selectProps={{
                      placeholder: 'Selecione a categoria que irá trabalhar',
                      loading,
                    }}
                    name={`freelancer.categorys[${index}].id`}
                  >
                    {categories?.map((category) => (
                      <Select.Option key={category.id} value={category.id}>
                        {category.name}
                      </Select.Option>
                    ))}
                  </SelectField>
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  span={6}
                >
                  <ButtonIcon onClick={() => removeCategory(index)}>
                    <TrashCanIcon />
                  </ButtonIcon>
                  <ButtonIcon onClick={() => addCategory()}>
                    <PlusIcon />
                  </ButtonIcon>
                </Col>
              </Row>
            );
          })}
        </If>

        <If condition={openInput}>
          <Field
            name="freelancer.expText"
            formItemProps={{ label: 'Experiência Resumo' }}
            type="textarea"
            textAreaProps={{
              placeholder:
                'Digite um resumo da sua experiência nas categorias escolhidas. Max 255 caracteres',
              allowClear: true,
            }}
          />
        </If>
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

export default PersonStep;
