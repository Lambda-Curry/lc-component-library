import React, { FC, forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './ButtonBase';
import { ButtonStyled } from './ButtonStyled';

export const ButtonInfo: FC<ButtonProps> = forwardRef(({ className, ...props }, ref) => (
  <ButtonStyled
    {...props}
    ref={ref}
    className={classNames(
      [
        `lc-button-info`,
        `lc-text-white`,
        `lc-bg-info`,
        `lc-border-info`,
        `hover:lc-text-white`,
        `hover:lc-bg-info-dark`,
        `hover:lc-border-info-dark`,
        `focus-visible:lc-ring-info`
      ],
      className
    )}
  />
));
