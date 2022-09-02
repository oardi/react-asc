import React, { useEffect } from 'react';
import type { IAppBarProps} from 'lib';
import { AppBar, AppBarTitle, COLOR, FormControl, HomeSolidIcon, IconButton, Tooltip, Typography } from 'lib';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';

const AppBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAppBarProps>): JSX.Element => {

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
		<>
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
		</>
	);
};

export const AppBarPage: () => JSX.Element = withOptions<IAppBarProps>(AppBarPageBase, {
	shadow: false,
	color: COLOR.light
}, 'AppBarPageBase');
