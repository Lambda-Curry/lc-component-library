import React from 'react';
import classNames from 'classnames';
import { Button } from '.';
import { ButtonProps } from './Button';

export const ButtonOutlineDanger = ({ className, ...rest }: ButtonProps) => (
  <Button {...rest} className={classNames('button-outline-danger', className)} />
);