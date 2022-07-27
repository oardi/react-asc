import React, { useEffect } from 'react';
import { HomeSolidIcon, FormControl, COLOR, snackbarService, FloatingActionButton, SIZE, IFloatingActionButtonProps } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const FloatingActionButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFloatingActionButtonProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map((c: string) => ({ label: c, value: c })) }),
			fixed: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'fixed' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			size: new FormControl(settingValues.size, [], 'select', { label: 'size', options: Object.keys(SIZE).map((c: string) => ({ label: c, value: c })) }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('FloatingActionButton clicked');
	}

	return (
		<>
			<FloatingActionButton
				color={settingValues.color}
				fixed={settingValues.fixed}
				size={settingValues.size}
				isActive={settingValues.isActive}
				disabled={settingValues.disabled}
				icon={<HomeSolidIcon />}
				onClick={handleClick}
			/>
		</>
	);
}

export const FloatingActionButtonPage = withOptions<IFloatingActionButtonProps>(FloatingActionButtonPageBase, {
	color: COLOR.primary,
	size: SIZE.lg
}, 'FloatingActionButtonPageBase');
