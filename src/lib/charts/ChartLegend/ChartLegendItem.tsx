import classNames from 'classnames';
import React, { FC } from 'react';
import { ButtonUnstyled } from '../../buttons';
import { ChartLabel } from '../ChartLabel/ChartLabel';

export interface ChartLegendItemProps {
  index: number;
  color: string;
  label?: string;
  value?: string | number;
  active: boolean;
  interactive?: boolean;
  onClick?: (event: React.MouseEvent<any, MouseEvent>, index: number) => void;
}

export const ChartLegendItem: FC<ChartLegendItemProps> = ({
  index,
  color,
  label,
  value,
  onClick,
  active,
  interactive,
  ...props
}) => {
  if (!label) return null;

  const handleClick = (event: React.MouseEvent<any, MouseEvent>) => {
    if (onClick) onClick(event, index);
  };

  const ItemContent = () => (
    <>
      <ChartLabel className="lc-chart-legend-item-label" color={color} label={label} />
      {value && <span className="lc-chart-legend-item-value">({value})</span>}
    </>
  );

  return (
    <li className={classNames('lc-chart-legend-item', { 'lc-chart-legend-item-active': active })} {...props}>
      {interactive ? (
        <ButtonUnstyled className="lc-chart-legend-item-button" onClick={handleClick}>
          <ItemContent />
        </ButtonUnstyled>
      ) : (
        <ItemContent />
      )}
    </li>
  );
};
