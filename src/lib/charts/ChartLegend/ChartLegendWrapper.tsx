import React, { FC, HTMLAttributes } from 'react';
import { ChartJSData, ChartJSDataFunction, ChartLegendComponent, ChartRefObject } from '../chart.helpers';
import { ChartLegend } from './ChartLegend';

export interface ChartLegendWrapperProps extends HTMLAttributes<HTMLDivElement> {
  data: ChartJSData | ChartJSDataFunction;
  chartRef: ChartRefObject;
  component?: ChartLegendComponent;
}

export const ChartLegendWrapper: FC<ChartLegendWrapperProps> = ({ data, chartRef, component, ...props }) => {
  const legendProps = {
    data: typeof data === 'function' ? data(chartRef.current?.chartInstance.canvas as HTMLElement) : data
  };

  return (
    <div className="lc-chart-legend-wrapper" {...props}>
      {component ? component(legendProps) : <ChartLegend {...legendProps} />}
    </div>
  );
};
