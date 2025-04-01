import React, { FC } from 'react';
import { z } from 'zod';
import { DatePicker } from '../../inputs';

export interface DateFilterProps {
  value: string | null;
  onChange: (value: string | null) => void;
  label: string;
  minDate?: Date;
  maxDate?: Date;
}

export const DateFilter: FC<DateFilterProps> = ({ 
  value, 
  onChange, 
  label, 
  minDate, 
  maxDate 
}) => {
  return (
    <DatePicker
      label={label}
      value={value || ''}
      onChange={(date) => onChange(date || null)}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

export const dateFilterSchema = z.string().nullable();

export const createDateFilter = (
  name: string, 
  label: string, 
  options?: { minDate?: Date; maxDate?: Date }
) => ({
  name,
  label,
  schema: dateFilterSchema,
  component: (props: DateFilterProps) => (
    <DateFilter 
      {...props} 
      minDate={options?.minDate} 
      maxDate={options?.maxDate} 
    />
  ),
  defaultValue: null
});