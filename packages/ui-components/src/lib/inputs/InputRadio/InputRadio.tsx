import React, { FC } from 'react';
import classNames from 'classnames';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio, { RadioProps } from '@mui/material/Radio';
import './input-radio.css';

export interface InputRadioProps extends RadioProps {
  label: FormControlLabelProps['label'];
  labelPlacement?: FormControlLabelProps['labelPlacement'];
}

export const InputRadio: FC<InputRadioProps> = ({
  className,
  color = 'primary',
  label,
  labelPlacement,
  value,
  ...props
}) => {
  return (
    <FormControlLabel
      control={<Radio {...props} color={color} inputProps={{ 'aria-label': typeof label === 'string' ? label : undefined }} />}
      className={classNames('lc-input lc-input-radio', className)}
      label={label}
      labelPlacement={labelPlacement}
      value={value}
    />
  );
};
