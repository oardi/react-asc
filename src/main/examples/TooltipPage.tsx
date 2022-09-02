import React, { useEffect } from 'react';
import type { ITooltipProps} from 'lib';
import { Button, FormControl, Tooltip } from 'lib';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';

export const TooltipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITooltipProps>): JSX.Element => {

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

export const TooltipPage: () => JSX.Element = withOptions(TooltipPageBase, {
	text: 'some tooltip text',
	placement: 'top'
}, 'TooltipPageBase');
