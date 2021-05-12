import React, { Fragment, useEffect } from 'react';
import { IIconButtonProps, HomeSolidIcon, FormControl, COLOR, snackbarService, FloatingActionButton, SIZE } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const FloatingActionButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconButtonProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			size: new FormControl(settingValues.size, [], 'select', { label: 'size', options: Object.keys(SIZE).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('FloatingActionButton clicked');
	}

	return (
		<Fragment>
			<FloatingActionButton
				color={settingValues.color}
				size={settingValues.size}
				isActive={settingValues.isActive}
				disabled={settingValues.disabled}
				icon={<HomeSolidIcon />}
				onClick={handleClick}
			/>
		</Fragment>
	);
}

export const FloatingActionButtonPage = withOptions<IIconButtonProps>(FloatingActionButtonPageBase, {
	color: COLOR.primary,
	size: SIZE.lg
});
