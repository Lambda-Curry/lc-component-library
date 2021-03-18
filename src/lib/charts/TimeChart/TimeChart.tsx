import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { merge } from 'lodash';
import { ChartJSOptions } from '../chart.helpers';
import { LineChart, LineChartProps } from '../LineChart/LineChart';
import { ChartLegend } from '../ChartLegend/ChartLegend';

export interface TimeChartProps extends LineChartProps {}

export const TimeChart: FC<TimeChartProps> = ({ options, datasets, className, ...props }) => {
  const { datasetDisplayLimit = 3 } = options || {};

  const [activeIndexes, setActiveIndexes] = useState(
    datasets?.slice(0, datasetDisplayLimit).map((dataset, index) => index)
  );
  const [visibleDatasets, setVisibleDatasets] = useState<LineChartProps['datasets']>(datasets);

  useEffect(() => {
    if (datasets && activeIndexes)
      setVisibleDatasets(
        datasets.map((dataset: any, index) => ({
          ...dataset,
          hidden: !activeIndexes.includes(index)
        }))
      );
  }, [activeIndexes, datasets]);

  const activateDataset = (index: number) => {
    if (index < 0 || !activeIndexes) return;
    if (activeIndexes.includes(index)) return;
    setActiveIndexes([...activeIndexes.slice(1), index]);
  };

  const handleItemClick = (index: number) => activateDataset(index);

  const defaultOptions: ChartJSOptions = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            minUnit: 'day',
            round: 'day'
          }
        }
      ]
    }
  };

  return (
    <LineChart
      datasets={visibleDatasets}
      className={classNames('lc-chart-time', className)}
      options={merge(defaultOptions, options)}
      legendComponent={legendProps => (
        <ChartLegend {...legendProps} interactive={true} onItemClick={(event, index) => handleItemClick(index)} />
      )}
      {...props}
    />
  );
};
