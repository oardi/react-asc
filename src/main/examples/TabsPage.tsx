import React, { useEffect, useState } from 'react';
import { COLOR, FormControl, ITabsProps, snackbarService, Tab, TabPanel, Tabs } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';


const CLASSNAME: string = 'TabsPageBase';
const TabsPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsProps>): JSX.Element => {

	const [selectedValue, setSelectedValue] = useState<string>('tabspage-tab2');

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleChange = (value: string): void => {
		loggerService.debug(CLASSNAME, 'handleChange');
		snackbarService.show(`You selected: ${value}`);
		setSelectedValue(value);
	};

	return (
		<>
			<Tabs
				color={settingValues.color}
				fixed={settingValues.fixed}
				onChange={handleChange}
				value={selectedValue}
			>
				<Tab value="tabspage-tab1" label="Tab 1" />
				<Tab value="tabspage-tab2" label="Tab 2" />
				<Tab value="tabspage-tab3" label={<div className="text-success">Tab 3 with css</div>} />
				<Tab value="tabspage-tab4" label="Tab 4" disabled />
			</Tabs>

			<TabPanel value={selectedValue} index="tabspage-tab1">
				Tab1 Content
			</TabPanel>
			<TabPanel value={selectedValue} index="tabspage-tab2">
				Tab2 Content
			</TabPanel>
			<TabPanel value={selectedValue} index="tabspage-tab3">
				Tab3 Content
			</TabPanel>
			<TabPanel value={selectedValue} index="tabspage-tab4">
				Tab4 Content should never be displayed
			</TabPanel>
		</>
	);
};

export const TabsPage: () => JSX.Element = withOptions<ITabsProps>(TabsPageBase, {
	color: COLOR.primary,
	fixed: false
}, CLASSNAME);
