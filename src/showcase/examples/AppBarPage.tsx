import React, { useEffect } from 'react';
import { AppBar, AppBarTitle, COLOR, FormControl, homeSolidSvg, IAppBarProps, IconButton } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const AppBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAppBarProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	return (
		<>
			<AppBar
				color={settingValues.color}
				shadow={settingValues.shadow}
			>
				<AppBarTitle>Navbar</AppBarTitle>
				<IconButton color={COLOR.light} icon={homeSolidSvg} />
			</AppBar>
		</>
	);
}

export const AppBarPage = withOptions<IAppBarProps>(AppBarPageBase, {
	shadow: false,
	color: COLOR.primary
});
