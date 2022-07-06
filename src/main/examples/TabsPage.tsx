import React, { useEffect, useState } from 'react';
import { COLOR, FormControl, ITabOnChangeEvent, ITabsProps, snackbarService, Tab, TabPanel, Tabs } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';


const CLASSNAME = 'TabsPageBase';
const TabsPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsProps>) => {

	const [value, setValue] = useState<string>('tab2');

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
		});
	}, []);


	const handleChange = (e: ITabOnChangeEvent) => {
		loggerService.debug(CLASSNAME, 'handleSelected', e.newValue);
		snackbarService.show(`You selected: ${e.newValue}`);
		setValue(e.newValue);
	}

	return (
		<>
			<Tabs
				color={settingValues.color}
				value={value}
				fixed={settingValues.fixed}
				onChange={handleChange}
			>
				<Tab value="tab1" label="Tab 1" />
				<Tab value="tab2" label="Tab 2" />
				<Tab value="tab3" label={<div className="text-success">Tab 3 with css</div>} />
				<Tab value="tab4" label="Tab 4" disabled />
			</Tabs>

			<TabPanel value={value} index="tab1">
				Tab1 Content
			</TabPanel>
			<TabPanel value={value} index="tab2">
				Tab2 Content
			</TabPanel>
			<TabPanel value={value} index="tab3">
				Tab3 Content
			</TabPanel>
			<TabPanel value={value} index="tab4">
				Tab4 Content should never be displayed
			</TabPanel>
		</>
	);
}

export const TabsPage = withOptions<ITabsProps>(TabsPageBase, {
	color: COLOR.primary,
	fixed: false
}, CLASSNAME);
