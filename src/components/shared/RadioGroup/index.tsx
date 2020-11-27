import React from 'react';
import { Form, Radio } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { RadioGroupProps } from 'antd/lib/radio';

interface IProps {
  radioGroupProps?: Omit<RadioGroupProps, 'name'>;
  formItemProps?: Omit<FormItemProps, 'children'>;
  name: string | number;
  loading?: boolean;
}

const RadioGroup: React.FC<IProps> = ({
  radioGroupProps,
  formItemProps,
  loading,
  name,
}) => {
  const { control, errors } = useFormContext();
  const error = errors[name];

  return (
    <Form.Item
      style={{ marginBottom: 0 }}
      validateStatus={loading ? 'validating' : error ? 'error' : 'success'}
      help={error ? error.message : ''}
      {...formItemProps}
    >
      <Controller
        name={String(name)}
        control={control}
        render={(props: any) => (
          <Radio.Group {...radioGroupProps}>
            <Radio {...props} key="M" value="M">
              Masculino
            </Radio>
            <Radio {...props} key="F" value="F">
              Feminino
            </Radio>
            <Radio {...props} key="O" value="O">
              Outro
            </Radio>
          </Radio.Group>
        )}
      />
    </Form.Item>
  );
};

export default RadioGroup;
