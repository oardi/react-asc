import React from 'react';
import { loggerService, snackbarService, Tab, Tabset } from '../../lib';
import { withOptions } from './components';

const CLASSNAME = 'TabsetPage';
const TabsetPageBase = () => {

	const handleSelected = (eventKey: string) => {
		loggerService.debug(CLASSNAME, 'handleSelected', eventKey);
		snackbarService.show(`You selected: ${eventKey}`);
	}

	return (
		<div>
			<Tabset selectedEventKey="tab2" onTabSelect={handleSelected}>
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

export const TabsetPage = withOptions(TabsetPageBase);
