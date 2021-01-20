import React, { Fragment, useEffect } from 'react';
import { IconButton, IIconButtonProps, homeSolidSvg, FormControl, COLOR, VARIANT, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const IconButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconButtonProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('IconButton clicked');
	}

	return (
		<Fragment>
			<IconButton
				color={settingValues.color}
				isActive={settingValues.isActive}
				disabled={settingValues.disabled}
				icon={homeSolidSvg}
				variant={settingValues.variant}
				onClick={handleClick}
			/>
		</Fragment>
	);
}

export const IconButtonPage = withOptions<IIconButtonProps>(IconButtonPageBase, {
	color: COLOR.primary,
	variant: VARIANT.normal
});
