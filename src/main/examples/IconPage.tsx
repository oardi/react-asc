import React, { useEffect } from 'react';
import { COLOR, FormControl, HomeSolidIcon, Icon, IIconProps } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const IconPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconProps>) => {

	useEffect(() => {
		setSettingsControls({
			iconColor: new FormControl(settingValues.iconColor, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	return (
		<>
			<Icon iconColor={settingValues.iconColor}>
				<HomeSolidIcon />
			</Icon>
		</>
	);
};

export const IconPage = withOptions<IIconProps>(IconPageBase, {
	iconColor: COLOR.primary
}, 'IconPageBase');
