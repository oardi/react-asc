import React, { useEffect, useState } from 'react';
import { COLOR, FormControl, ITabsProps, snackbarService, Tab, TabPanel, Tabs } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';


const CLASSNAME = 'TabsPageBase';
const TabsPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsProps>) => {

	const [selectedValue, setSelectedValue] = useState<string>('tab2');

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleChange = (value: string) => {
		loggerService.debug(CLASSNAME, 'handleSelected');
		snackbarService.show(`You selected: ${value}`);
		setSelectedValue(value);
	}

	return (
		<>
			<Tabs
				color={settingValues.color}
				fixed={settingValues.fixed}
				onChange={handleChange}
				value={selectedValue}
			>
				<Tab value="tab1" label="Tab 1" />
				<Tab value="tab2" label="Tab 2" />
				<Tab value="tab3" label={<div className="text-success">Tab 3 with css</div>} />
				<Tab value="tab4" label="Tab 4" disabled />
			</Tabs>

			<TabPanel value={selectedValue} index="tab1">
				Tab1 Content
			</TabPanel>
			<TabPanel value={selectedValue} index="tab2">
				Tab2 Content
			</TabPanel>
			<TabPanel value={selectedValue} index="tab3">
				Tab3 Content
			</TabPanel>
			<TabPanel value={selectedValue} index="tab4">
				Tab4 Content should never be displayed
			</TabPanel>
		</>
	);
}

export const TabsPage = withOptions<ITabsProps>(TabsPageBase, {
	color: COLOR.primary,
	fixed: false
}, CLASSNAME);
