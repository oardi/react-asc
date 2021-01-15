import React from 'react';
import { Button, Tooltip } from '../../lib';
import { withOptions } from './components';

export const TooltipPageBase = () => {
	return (
		<div>
			<h2>WIP</h2>
			<Button>show tooltip</Button>
			<Tooltip>some tooltip</Tooltip>
		</div>
	);
}

export const TooltipPage = withOptions(TooltipPageBase);
