import React, { Fragment, useEffect } from 'react';
import { Button, COLOR, FormControl, IButtonProps, snackbarService, VARIANT } from '../../lib';
import { InfoSolidIcon } from '../assets';
import { withOptions } from './components';
import { IShowcaseBaseProps } from './components';

interface IButtonExampleProps extends IButtonProps {
	showStartIcon?: boolean;
	showEndIcon?: boolean;
}

const ButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonExampleProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			isRounded: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isRounded' }),
			showStartIcon: new FormControl(settingValues.showStartIcon, [], 'checkbox', { label: 'showStartIcon' }),
			showEndIcon: new FormControl(settingValues.showEndIcon, [], 'checkbox', { label: 'showEndIcon' }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('Button clicked');
	}

	return (
		<Fragment>

			<Button
				color={settingValues.color}
				disabled={settingValues.disabled}
				isActive={settingValues.isActive}
				isRounded={settingValues.isRounded}
				variant={settingValues.variant}
				onClick={handleClick}
				startIcon={settingValues.showStartIcon ? <InfoSolidIcon /> : undefined}
				endIcon={settingValues.showEndIcon ? <InfoSolidIcon /> : undefined}
			>
				some button text
			</Button>

		</Fragment>
	);
}

export const ButtonPage = withOptions<IButtonExampleProps>(ButtonPageBase, {
	color: COLOR.primary,
	variant: VARIANT.contained
}, 'ButtonPageBase');
