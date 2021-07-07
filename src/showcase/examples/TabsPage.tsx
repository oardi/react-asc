import React, { useEffect, useState } from 'react';
import { FormControl, ITabsProps as ITabsProps, snackbarService, Tab, TabPanel, Tabs } from '../../lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'TabsPage';
const TabsPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsProps>) => {

	const [value, setValue] = useState('tab2');

	useEffect(() => {
		setSettingsControls({
			fill: new FormControl(settingValues.fill, [], 'checkbox', { label: 'fill' }),
		});
	}, []);


	const handleChange = (event: any, newValue: string) => {
		loggerService.debug(CLASSNAME, 'handleSelected', newValue);
		snackbarService.show(`You selected: ${newValue}`);

		setValue(newValue);
	}

	return (
		<div>
			<Tabs
				fill={settingValues.fill}
				selectedEventKey="tab2"
				onChange={handleChange}
			>
				<Tab value="tab1" label="tab 1" />
				<Tab value="tab2" label="tab 2" />
				<Tab value="tab3" label={<div className="text-success">tab 3 with css</div>} />
				<Tab value="tab4" label="tab 4" disabled />
			</Tabs>

			<TabPanel value={value} index="tab1">
				Item One
			</TabPanel>
			<TabPanel value={value} index="tab2">
				Item Two
			</TabPanel>
			<TabPanel value={value} index="tab3">
				Item Three
			</TabPanel>
		</div>
	);
}

export const TabsPage = withOptions<ITabsProps>(TabsPageBase, {
	fill: false
}, 'TabsPageBase');
