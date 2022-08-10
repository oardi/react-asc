import React, { useEffect } from 'react';
import { Button, FormControl, ITooltipProps, Tooltip } from 'lib';
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
		<Tooltip
			text={settingValues.text}
			placement={settingValues.placement}
		>
			<Button>
				show tooltip
			</Button>
		</Tooltip>
	);
};

export const TooltipPage = withOptions(TooltipPageBase, {
	text: 'some tooltip text',
	placement: 'top'
}, 'TooltipPageBase');
