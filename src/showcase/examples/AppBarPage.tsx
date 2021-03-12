import React, { Fragment, useEffect, useState } from 'react';
import { AppBar, AppBarTitle, COLOR, FormControl, HomeSolidIcon, IAppBarProps, IconButton, Tab, Tabset } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';
import { fileLoaderService, Markdown } from '../../shared';

const AppBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAppBarProps>) => {

	const [markdown, setMarkdown] = useState('');

	useEffect(() => {
		init();

		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: [{ value: COLOR.primary }, { value: COLOR.light }] }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	const init = async () => {
		const response = await fileLoaderService.get<string>('./showcase/appbar.md');
		setMarkdown(response.data);
	}

	return (
		<Fragment>
			<Tabset>
				<Tab eventKey="tab1" title="Preview">
					<AppBar
						color={settingValues.color}
						shadow={settingValues.shadow}
					>
						<AppBarTitle>Navbar</AppBarTitle>
						<IconButton color={COLOR.light} icon={<HomeSolidIcon />} />
					</AppBar>
				</Tab>
				<Tab eventKey="tab2" title="Usage">
					<Markdown text={markdown} />
				</Tab>
			</Tabset>
		</Fragment>
	);
}

export const AppBarPage = withOptions<IAppBarProps>(AppBarPageBase, {
	shadow: false,
	color: COLOR.primary
});
