import React from 'react';
import { LineChart } from '../../lib';
import { withOptions } from './components';

const ShowcaseChartBase = () => {
	return (
		<LineChart />
	);
}

export const ShowcaseChart = withOptions(ShowcaseChartBase);
