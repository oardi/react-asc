import React, { Fragment, useEffect } from 'react';
import { Button, FormControl, ITooltipProps, Tooltip } from '../../../src';
import { IShowcaseBaseProps, withOptions } from './components';

export const TooltipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITooltipProps>) => {

	useEffect(() => {
		setSettingsControls({
			text: new FormControl('some tooltip text', [], 'text', { label: 'Text' }),
			placement: new FormControl('top', [], 'select', {
				label: 'Placement', options: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
					{ label: 'top', value: 'top' },
					{ label: 'bottom', value: 'bottom' }
				]
			}),
		});
	}, []);

	return (
		<Fragment>
			<Tooltip
				text={settingValues.text}
				placement={settingValues.placement}
			>
				<Button>show tooltip</Button>
			</Tooltip>
		</Fragment>
	);
}

export const TooltipPage = withOptions<{ text: string, placement: string }>(TooltipPageBase, {
	text: 'some tooltip text',
	placement: 'top'
}, 'TooltipPageBase');
