import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { ChartTooltipModel } from 'chart.js';
import { ChartJSData, ChartJSDataFunction, ChartRefObject, ChartTooltipComponent } from '../chart.helpers';

export interface ChartTooltipProps extends HTMLAttributes<HTMLDivElement> {
  data: ChartJSData | ChartJSDataFunction;
  model: Omit<ChartTooltipModel, 'labelColors'> & { labelColors: any[] };
  chartRef: ChartRefObject;
  component?: ChartTooltipComponent;
}

export const ChartTooltip: FC<ChartTooltipProps> = ({ model, chartRef, component, ...props }) => {
  // Note: setting the label in state, prevents the label from disappearing before the tooltip
  const [tooltipModel, setTooltipModel] = useState<ChartTooltipModel>();

  useEffect(() => {
    if (model.opacity) setTooltipModel(model);
  }, [model]);

  if (!tooltipModel || !chartRef?.current) return null;

  const chartElement = chartRef.current?.chartInstance.canvas?.getBoundingClientRect() as DOMRect;
  const positionTop = chartElement.top + window.pageYOffset + model.caretY - 8;
  const positionLeft = chartElement.left + window.pageXOffset + model.caretX;

  const getLabel = ({ body }: ChartTooltipModel) => {
    const getBody = (bodyItem: any) => bodyItem.lines;
    const bodyLines = body.map(getBody);
    return bodyLines[0][0];
  };

  const getLabelColor = ({ labelColors }: ChartTooltipModel) => {
    if (!labelColors || !labelColors[0]) return false;
    return (labelColors[0] as any).backgroundColor;
  };

  return (
    <div
      className={classNames('lc-chart-tooltip', { 'lc-chart-tooltip-loaded': model?.opacity })}
      style={{ top: positionTop, left: positionLeft }}
      {...props}
    >
      {component ? (
        component({ model: tooltipModel, chartRef })
      ) : (
        <div className="lc-chart-tooltip-content">
          <div className="lc-chart-tooltip-color" style={{ backgroundColor: getLabelColor(tooltipModel) }}></div>
          {getLabelColor(tooltipModel) && <div className="lc-chart-tooltip-label">{getLabel(tooltipModel)}</div>}
        </div>
      )}
    </div>
  );
};

export type RenderChartTooltipProps = (props: ChartTooltipProps) => void;

// Note: Abstracted from https://github.com/reactchartjs/react-chartjs-2/issues/151#issuecomment-470282163
export const renderChartTooltip: RenderChartTooltipProps = props => {
  let tooltipEl = document.getElementById('lc-chart-tooltip-wrapper');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'lc-chart-tooltip-wrapper';
    document.body.appendChild(tooltipEl);
  }

  ReactDOM.render(<ChartTooltip {...props} />, tooltipEl);
};
