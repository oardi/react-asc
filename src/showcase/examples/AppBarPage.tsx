import React, { Fragment, useEffect } from 'react';
import { AppBar, AppBarTitle, COLOR, FormControl, HomeSolidIcon, IAppBarProps, IconButton } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const AppBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAppBarProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: [{ label: 'primary', value: COLOR.primary }, { label: 'light', value: COLOR.light }] }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	return (
		<Fragment>
			<AppBar
				color={settingValues.color}
				shadow={settingValues.shadow}
			>
				<AppBarTitle>Navbar</AppBarTitle>
				<IconButton className="ml-auto" color={COLOR.light} icon={<HomeSolidIcon />} />
			</AppBar>
		</Fragment>
	);
}

export const AppBarPage = withOptions<IAppBarProps>(AppBarPageBase, {
	shadow: false,
	color: COLOR.primary
});
