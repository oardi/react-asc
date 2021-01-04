import React, { useEffect } from 'react';
import { Chart, ChartData, ChartOptions } from 'chart.js';

export interface IBaseChartProps {
	data: ChartData;
	options?: ChartOptions
}

export const LineChart = ({ data, options }: IBaseChartProps) => {
	const createChart = () => {
		let ctx = (document.querySelector('.chartjs') as HTMLCanvasElement).getContext('2d');

		new Chart(ctx, {
			type: 'line',
			data: data,
			options: options
		});
	};

	useEffect(() => {
		if (data) {
			createChart();
		}
	}, [data]);

	return (
		<canvas className="chartjs" width="400" height="400"></canvas>
	)
}
