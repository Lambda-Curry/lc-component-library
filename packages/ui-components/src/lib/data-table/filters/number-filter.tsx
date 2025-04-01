import React, { FC } from 'react';
import { z } from 'zod';
import { Input } from '../../inputs';

export interface NumberFilterProps {
  value: number | null;
  onChange: (value: number | null) => void;
  label: string;
  min?: number;
  max?: number;
  step?: number;
}

export const NumberFilter: FC<NumberFilterProps> = ({ 
  value, 
  onChange, 
  label, 
  min, 
  max, 
  step = 1 
}) => {
  return (
    <Input
      type="number"
      label={label}
      value={value === null ? '' : value}
      onChange={(e) => {
        const val = e.target.value;
        onChange(val === '' ? null : Number(val));
      }}
      min={min}
      max={max}
      step={step}
    />
  );
};

export const numberFilterSchema = z.number().nullable();

export const createNumberFilter = (
  name: string, 
  label: string, 
  options?: { min?: number; max?: number; step?: number }
) => ({
  name,
  label,
  schema: numberFilterSchema,
  component: (props: NumberFilterProps) => (
    <NumberFilter 
      {...props} 
      min={options?.min} 
      max={options?.max} 
      step={options?.step} 
    />
  ),
  defaultValue: null
});