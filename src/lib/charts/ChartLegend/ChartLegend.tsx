import { ChartType } from 'chart.js';
import React, { FC, HTMLAttributes } from 'react';
import {
  ChartJSData,
  ChartJSDataFunction,
  ChartLegendComponent,
  ChartRefObject,
  getPieChartPercentage,
  ChartLegendComponentProps
} from '../chart.helpers';
import { ChartLegendItem } from './ChartLegendItem';
import classNames from 'classnames';
import './chart-legend.css';

export interface ChartLegendProps extends Omit<ChartLegendComponentProps, 'data'> {
  type?: ChartType;
  data: ChartJSData | ChartJSDataFunction;
  chartRef: ChartRefObject;
  component?: ChartLegendComponent;
}

const PieChartLegendContent: FC<{ data: ChartJSData }> = ({ data }) => {
  if (!data.datasets || !data.datasets[0].data || !data.labels) return null;

  const dataset = data.datasets[0];

  // Note: I'm reversing the data here so that we can have the farthest left item align with the furthest left item on
  // the chart, which seems to make the most sense. - Jake 03/16/2021
  const reversedData = [...(dataset.data as number[])].reverse();
  const reversedLabels = [...(data.labels as string[])].reverse();
  const reversedBackgroundColors = [...(dataset.backgroundColor as string[])].reverse();

  return (
    <ul className="lc-chart-legend-list">
      {reversedData.map((value, index) => {
        const label = reversedLabels[index];
        const backgroundColor = reversedBackgroundColors[index];
        const pieChartPercentage = getPieChartPercentage(value, data);

        return (
          <li key={index} className="lc-chart-legend-item">
            <div className="lc-chart-legend-color" style={{ backgroundColor: backgroundColor }}></div>
            <div className="lc-chart-legend-label">
              <span className="lc-chart-legend-label-name">{label}</span>{' '}
              <span className="lc-chart-legend-label-value">{value}</span>{' '}
              {pieChartPercentage && <span className="lc-chart-legend-label-percentage">{pieChartPercentage}</span>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ChartLegendContent: FC<ChartLegendComponentProps> = ({ data, interactive, onItemClick }) => {
  if (!data.datasets || !data.datasets[0].data || !data.labels) return null;

  const { datasets } = data as ChartJSData;

  return (
    <ul className={classNames('lc-chart-legend', { 'lc-chart-legend-interactive': interactive })}>
      {datasets &&
        datasets.map(({ label, borderColor, backgroundColor, pointBackgroundColor, hidden }, index) => {
          const color = backgroundColor || pointBackgroundColor || borderColor;

          return (
            <ChartLegendItem
              key={index}
              index={index}
              color={color as string}
              label={label}
              onClick={onItemClick}
              active={!hidden}
              interactive={interactive}
            />
          );
        })}
    </ul>
  );
};

export const ChartLegend: FC<ChartLegendProps> = ({ type, data: chartJSData, chartRef, component, ...props }) => {
  const data =
    typeof chartJSData === 'function'
      ? chartJSData(chartRef.current?.chartInstance.canvas as HTMLElement)
      : chartJSData;

  if (!data.datasets || !type) return null;

  return (
    <div className="lc-chart-legend" {...props}>
      {component ? (
        component({ data, ...props })
      ) : (
        <>
          {['pie', 'doughnut'].includes(type) ? (
            <PieChartLegendContent data={data} />
          ) : (
            <ChartLegendContent data={data} {...props} />
          )}
        </>
      )}
    </div>
  );
};
