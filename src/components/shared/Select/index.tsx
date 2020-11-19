import React from 'react';
import { Form, Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { SelectProps, SelectValue } from 'antd/lib/select';

interface IProps {
  selectProps?: Omit<SelectProps<SelectValue>, 'name'>;
  formItemProps?: Omit<FormItemProps, 'children'>;
  name: string | number;
  loading?: boolean;
  children?: React.ReactNode;
}

const SelectField: React.FC<IProps> = ({
  selectProps,
  formItemProps,
  loading,
  name,
  children,
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
        render={(props) => (
          <Select {...props} {...selectProps}>
            {children}
          </Select>
        )}
      />
    </Form.Item>
  );
};

export default SelectField;
