import Chart, { ChartOptions, ChartTooltipModel } from 'chart.js';
import { merge } from 'lodash';
import React, { useState } from 'react';
import { Bar, ChartData } from 'react-chartjs-2';
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';

export const BarChart: React.FC<{
  chartJSData: ChartData<Chart.ChartData>;
  options?: ChartOptions;
}> = props => {
  const chartRef = React.useRef<any>();
  const [tooltipModel, setTooltipModel] = useState<ChartTooltipModel | undefined>();

  const defaultOptions: ChartOptions = {
    legend: { display: false },
    tooltips: {
      enabled: false,
      custom: setTooltipModel
    },
    scales: {
      gridLines: {
        drawBorder: false
      },
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: '#dedede',
            borderDash: [2, 2],
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  };
  const options = merge(defaultOptions, props.options);

  return (
    <>
      <Bar ref={chartRef} data={props.chartJSData} options={options} />
      <ChartTooltip chartRef={chartRef} model={tooltipModel} />
    </>
  );
};
