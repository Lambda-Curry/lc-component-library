import React, { FC } from 'react';
import { z } from 'zod';
import { Select, SelectOption } from '../../inputs';

export interface SelectFilterProps {
  value: string | null;
  onChange: (value: string | null) => void;
  label: string;
  options: SelectOption[];
  placeholder?: string;
}

export const SelectFilter: FC<SelectFilterProps> = ({ 
  value, 
  onChange, 
  label, 
  options,
  placeholder = 'Select...'
}) => {
  return (
    <Select
      label={label}
      value={value || ''}
      onChange={(e) => onChange(e.target.value || null)}
      options={options}
      placeholder={placeholder}
    />
  );
};

export const selectFilterSchema = z.string().nullable();

export const createSelectFilter = (
  name: string, 
  label: string, 
  options: SelectOption[],
  placeholder?: string
) => ({
  name,
  label,
  schema: selectFilterSchema,
  component: (props: SelectFilterProps) => (
    <SelectFilter {...props} options={options} placeholder={placeholder} />
  ),
  defaultValue: null
});