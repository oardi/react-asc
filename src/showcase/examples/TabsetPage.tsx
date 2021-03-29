import React, { useEffect } from 'react';
import { FormControl, ITabsetProps, snackbarService, Tab, Tabset } from '../../lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'TabsetPage';
const TabsetPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITabsetProps>) => {

	useEffect(() => {
		setSettingsControls({
			fill: new FormControl(settingValues.fill, [], 'checkbox', { label: 'fill' }),
		});
	}, []);


	const handleSelected = (eventKey: string) => {
		loggerService.debug(CLASSNAME, 'handleSelected', eventKey);
		snackbarService.show(`You selected: ${eventKey}`);
	}

	return (
		<div>
			<Tabset
				fill={settingValues.fill}
				selectedEventKey="tab2"
				onTabSelect={handleSelected}
			>
				<Tab eventKey="tab1" title="tab 1">
					1st CONTENT
				</Tab>
				<Tab eventKey="tab2" title="tab 2">
					2nd CONTENT
				</Tab>
				<Tab eventKey="tab3" title={<div className="text-success">tab 3 with css</div>}>
					3rd CONTENT
				</Tab>
				<Tab eventKey="tab4" title="tab 4" disabled>
					4th CONTENT
				</Tab>
			</Tabset>
		</div>
	);
}

export const TabsetPage = withOptions<ITabsetProps>(TabsetPageBase, {
	fill: false
});
