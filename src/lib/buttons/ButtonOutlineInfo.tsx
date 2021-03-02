import React, { FC, forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './ButtonBase';
import { ButtonStyled } from './ButtonStyled';

export const ButtonOutlineInfo: FC<ButtonProps> = forwardRef(({ className, ...props }, ref) => (
  <ButtonStyled
    {...props}
    ref={ref}
    className={classNames(
      [
        `lc-button-outline-info`,
        `lc-text-info`,
        `lc-border-info`,
        `hover:lc-text-white`,
        `hover:lc-bg-info`,
        `focus-visible:lc-ring-info`
      ],
      className
    )}
  />
));
