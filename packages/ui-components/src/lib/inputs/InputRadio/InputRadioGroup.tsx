import React, { FC, ChangeEvent } from 'react';
import classNames from 'classnames';
import { FormikProps } from 'formik';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import { useFormContext } from '../../hooks';
import './input-radio.css';

export interface InputRadioGroupProps extends RadioGroupProps {
  className?: string;
  formikProps?: FormikProps<any>;
  label?: string;
}

export const InputRadioGroup: FC<InputRadioGroupProps> = ({ className, formikProps, label, onChange, ...props }) => {
  const formContext = useFormContext();
  if (!formikProps && formContext) formikProps = formContext;

  const fieldProps = formikProps?.getFieldProps?.(props.name);
  const fieldValue = props.value ?? fieldProps?.value;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event, event.target.value);
    if (fieldProps?.onChange) fieldProps.onChange(event);
  };

  return (
    <FormControl className={classNames('lc-input-radio-group', className)} component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup 
        aria-label={props.name} 
        onChange={handleChange} 
        value={fieldValue} 
        {...props} 
      />
    </FormControl>
  );
};
