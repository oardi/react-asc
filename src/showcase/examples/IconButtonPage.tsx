import React, { Fragment, useEffect } from 'react';
import { IconButton, IIconButtonProps, homeSolidSvg, FormControl, COLOR, VARIANT } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const IconButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconButtonProps>) => {

	useEffect(() => {
		setSettingsControls({
			className: new FormControl(settingValues.className, [], 'text', { label: 'className', placeholder: 'css class' }),
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	return (
		<Fragment>
			<IconButton
				className={settingValues.className}
				color={settingValues.color}
				isActive={settingValues.isActive}
				disabled={settingValues.disabled}
				icon={homeSolidSvg}
				variant={settingValues.variant}
			/>
		</Fragment>
	);
}

export const IconButtonPage = withOptions<IIconButtonProps>(IconButtonPageBase, {
	color: COLOR.primary,
	variant: VARIANT.normal
});
