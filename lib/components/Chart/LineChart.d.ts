/// <reference types="react" />
import { ChartData, ChartOptions } from 'chart.js';
export interface IBaseChartProps {
    data: ChartData;
    options?: ChartOptions;
}
export declare const LineChart: ({ data, options }: IBaseChartProps) => JSX.Element;
