import React, { useEffect, useState } from 'react';
import { FormControl, ITabsetProps, snackbarService, Tab, TabPanel, Tabs } from '../../lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'TabsetPage';
const TabsetPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsetProps>) => {

	const [value, setValue] = useState('one');

	useEffect(() => {
		setSettingsControls({
			fill: new FormControl(settingValues.fill, [], 'checkbox', { label: 'fill' }),
		});
	}, []);


	const handleChange = (event: any, newValue: string) => {
		loggerService.debug(CLASSNAME, 'handleSelected', value);
		snackbarService.show(`You selected: ${value}`);

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

			<TabPanel value={value} index="one">
				Item One
			</TabPanel>
			<TabPanel value={value} index="two">
				Item Two
			</TabPanel>
			<TabPanel value={value} index="three">
				Item Three
			</TabPanel>
		</div>
	);
}

export const TabsetPage = withOptions<ITabsetProps>(TabsetPageBase, {
	fill: false
}, 'TabsetPageBase');
