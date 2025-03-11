import { useEffect, useState } from 'react';
import type { ITabsProps } from 'src/lib';
import { Color, FormControl, Tab, TabPanel, Tabs, loggerService, snackbarService } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const CLASSNAME: string = 'TabsPageBase';
const TabsPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsProps>): React.JSX.Element => {
	const [selectedValue, setSelectedValue] = useState<string>('tabspage-tab2');

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
			}),
		});
	}, []);

	const handleChange = (value: string): void => {
		loggerService.debug(CLASSNAME, 'handleChange');
		void snackbarService.show(`You selected: ${value}`);
		setSelectedValue(value);
	};

	return (
		<>
			<Tabs color={settingValues.color} fixed={settingValues.fixed} onChange={handleChange} value={selectedValue}>
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

export const TabsPage: () => React.JSX.Element = withOptions<ITabsProps>(
	TabsPageBase,
	{
		color: Color.primary,
		fixed: false,
	},
	CLASSNAME
);
