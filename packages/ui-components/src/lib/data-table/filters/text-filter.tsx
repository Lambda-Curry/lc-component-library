import React, { FC } from 'react';
import { z } from 'zod';
import { Input } from '../../inputs';

export interface TextFilterProps {
  value: string | null;
  onChange: (value: string | null) => void;
  label: string;
  placeholder?: string;
}

export const TextFilter: FC<TextFilterProps> = ({ value, onChange, label, placeholder }) => {
  return (
    <Input
      label={label}
      value={value || ''}
      onChange={(e) => onChange(e.target.value || null)}
      placeholder={placeholder}
    />
  );
};

export const textFilterSchema = z.string().nullable();

export const createTextFilter = (name: string, label: string, placeholder?: string) => ({
  name,
  label,
  schema: textFilterSchema,
  component: (props: TextFilterProps) => <TextFilter {...props} placeholder={placeholder} />,
  defaultValue: null
});