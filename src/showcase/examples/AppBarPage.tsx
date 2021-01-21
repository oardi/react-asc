import React, { Fragment, useEffect } from 'react';
import { AppBar, AppBarTitle, COLOR, FormControl, homeSolidSvg, IAppBarProps, IconButton, Tab, Tabset } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';
import { Markdown } from '../../shared';

const AppBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAppBarProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	const UsageMarkdown = "```\n <AppBar /> ```";

	return (
		<Fragment>
			<Tabset>
				<Tab eventKey="tab1" title="Preview">
					<AppBar
						color={settingValues.color}
						shadow={settingValues.shadow}
					>
						<AppBarTitle>Navbar</AppBarTitle>
						<IconButton color={COLOR.light} icon={homeSolidSvg} />
					</AppBar>
				</Tab>
				<Tab eventKey="tab2" title="Usage">
					<Markdown text={UsageMarkdown} />
				</Tab>
			</Tabset>
		</Fragment>
	);
}

export const AppBarPage = withOptions<IAppBarProps>(AppBarPageBase, {
	shadow: false,
	color: COLOR.primary
});
