import React, { useEffect } from 'react';
import type { ITooltipProps} from 'lib';
import { Button, FormControl, Tooltip } from 'lib';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';
import { TooltipPlacement } from 'lib/components/Tooltip/tooltip.enums';

export const TooltipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITooltipProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			text: new FormControl('some tooltip text', [], 'text', { label: 'text' }),
			placement: new FormControl('top', [], 'select', {
				label: 'placement', options: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
					{ label: 'top', value: 'top' },
					{ label: 'bottom', value: 'bottom' }
				]
			}),
			isOpen: new FormControl(false, [], 'checkbox', { label: 'isOpen', hint: '' }),
			isShowClose: new FormControl(false, [], 'checkbox', { label: 'isShowClose', hint: '' }),
			delay: new FormControl(0, [], 'number', { label: 'delay', hint: 'delay for displaying and hiding a tooltip' }),
		});
	}, []);

	return (
		<Tooltip
			text={settingValues.text}
			placement={settingValues.placement}
			isOpen={settingValues.isOpen}
			isShowClose={settingValues.isShowClose}
			delay={settingValues.delay}
		>
			<Button>
				show tooltip
			</Button>
		</Tooltip>
	);
};

export const TooltipPage: () => JSX.Element = withOptions(TooltipPageBase, {
	text: 'some tooltip text',
	placement: TooltipPlacement.top
}, 'TooltipPageBase');
