import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { InputProps } from 'antd/lib/input/Input';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { TextAreaProps } from 'antd/lib/input';
import { InputNumberProps } from 'antd/lib/input-number';

type ITypes = 'password' | 'textarea' | 'number';

interface IProps {
  inputProps?: Omit<InputProps, 'name'>;
  textAreaProps?: Omit<TextAreaProps, 'name'>;
  numberProps?: Omit<InputNumberProps, 'name'>;
  formItemProps?: Omit<FormItemProps, 'children'>;
  name: string;
  loading?: boolean;
  type?: ITypes;
}

const Field: React.FC<IProps> = ({
  inputProps,
  textAreaProps,
  numberProps,
  formItemProps,
  loading,
  name,
  type,
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
        name={name}
        control={control}
        render={(props) => {
          if (type === 'password') {
            return <Input.Password {...inputProps} {...props} />;
          }

          if (type === 'textarea') {
            return <Input.TextArea {...textAreaProps} {...props} />;
          }

          if (type === 'number') {
            return <InputNumber {...numberProps} {...props} />;
          }

          return <Input {...inputProps} {...props} />;
        }}
      />
    </Form.Item>
  );
};

export default React.memo(Field);
