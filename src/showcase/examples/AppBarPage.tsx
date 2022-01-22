import React, { Fragment, useEffect } from 'react';
import { AppBar, AppBarTitle, COLOR, FormControl, HomeSolidIcon, IAppBarProps, IconButton, Tooltip, Typography } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const AppBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAppBarProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c }))
			}),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	return (
		<Fragment>
			<AppBar
				color={settingValues.color}
				shadow={settingValues.shadow}
			>
				<AppBarTitle>
					<Tooltip text="some alt text">
						<Typography>Some AppBar Title with some more text to test</Typography>
					</Tooltip>
				</AppBarTitle>
				<IconButton className="ml-auto" color={COLOR.light} icon={<HomeSolidIcon />} />
			</AppBar>
		</Fragment>
	);
}

export const AppBarPage = withOptions<IAppBarProps>(AppBarPageBase, {
	shadow: false,
	color: COLOR.primary
}, 'AppBarPageBase');
