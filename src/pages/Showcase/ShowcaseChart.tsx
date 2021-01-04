import React from 'react';
import { LineChart } from '../../lib';
import { withOptions } from './components';

const ShowcaseChartBase = () => {
	return (
		<LineChart data={
			{
				datasets: [{
					label: 'Dataset 1',
					data: [10, 20, 30]
				}],
				labels: [
					'Red',
					'Yellow',
					'Blue'
				]
			}
		} />
	);
}

export const ShowcaseChart = withOptions(ShowcaseChartBase);
