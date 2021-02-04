import React, { Fragment, useEffect } from 'react';
import { Button, COLOR, FormControl, IButtonProps, snackbarService, VARIANT } from '../../lib';
import { withOptions } from './components';
import { IShowcaseBaseProps } from './components';

const ButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonProps>) => {

	useEffect(() => {
		setSettingsControls({
			block: new FormControl(settingValues.block, [], 'checkbox', { label: 'block' }),
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			isRounded: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isRounded' }),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('Button clicked');
	}

	return (
		<Fragment>

			<Button
				block={settingValues.block}
				color={settingValues.color}
				disabled={settingValues.disabled}
				isActive={settingValues.isActive}
				isRounded={settingValues.isRounded}
				variant={settingValues.variant}
				onClick={handleClick}
			>
				some button text
			</Button>

		</Fragment>
	);
}

export const ButtonPage = withOptions<IButtonProps>(ButtonPageBase, {
	color: COLOR.primary,
	variant: VARIANT.contained
});
