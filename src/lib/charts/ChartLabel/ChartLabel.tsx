import classNames from 'classnames';
import React, { FC } from 'react';

export interface ChartLabelProps {
  color: string;
  label: string;
  className?: string;
}

export const ChartLabel: FC<ChartLabelProps> = ({ color, label, className, ...props }) => (
  <span className={classNames('lc-chart-label', className)} {...props}>
    <span className="lc-chart-label-color" style={{ backgroundColor: color }} />
    {label}
  </span>
);
