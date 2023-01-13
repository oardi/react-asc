import React, { useEffect } from 'react';
import type { IButtonProps } from 'lib';
import { Button, COLOR, FormControl, snackbarService, VARIANT } from 'lib';
import { InfoSolidIcon } from '../assets';
import { withOptions } from './components';
import type { IShowcaseBaseProps } from './components';

interface IButtonExampleProps extends IButtonProps {
	showStartIcon?: boolean;
	showEndIcon?: boolean;
}

const ButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonExampleProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c })),
			}),
			variant: new FormControl(settingValues.variant, [], 'select', {
				label: 'variant',
				options: Object.keys(VARIANT).map(c => ({ label: c, value: c })),
			}),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', {
				label: 'disabled',
				hint: 'whether the tag is disabled or enabled',
			}),
			block: new FormControl(settingValues.block, [], 'checkbox', { label: 'block' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			isRounded: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isRounded' }),
			showStartIcon: new FormControl(settingValues.showStartIcon, [], 'checkbox', { label: 'showStartIcon' }),
			showEndIcon: new FormControl(settingValues.showEndIcon, [], 'checkbox', { label: 'showEndIcon' }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'shadow' }),
		});
	}, []);

	const handleClick = (): void => {
		void snackbarService.show('Button clicked');
	};

	return (
		<>
			<Button
				color={settingValues.color}
				disabled={settingValues.disabled}
				block={settingValues.block}
				isActive={settingValues.isActive}
				isRounded={settingValues.isRounded}
				variant={settingValues.variant}
				onClick={handleClick}
				startIcon={settingValues.showStartIcon ? <InfoSolidIcon /> : undefined}
				endIcon={settingValues.showEndIcon ? <InfoSolidIcon /> : undefined}
				shadow={settingValues.shadow}>
				some button text
			</Button>
		</>
	);
};

export const ButtonPage: () => JSX.Element = withOptions<IButtonExampleProps>(
	ButtonPageBase,
	{
		color: COLOR.primary,
		variant: VARIANT.contained,
		shadow: true,
	},
	'ButtonPageBase'
);
