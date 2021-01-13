import React from 'react';
import { snackbarService, Tab, Tabset } from '../../lib';
import { withOptions } from './components';

const TabsetPageBase = () => {

	const handleSelected = (eventKey: string) => {
		snackbarService.show(`You selected: ${eventKey}`);
	}

	return (
		<div>
			<Tabset onTabSelect={handleSelected}>
				<Tab eventKey="tab1" title="tab 1" isActive={true}>
					1st CONTENT
				</Tab>
				<Tab eventKey="tab2" title="tab 2">
					2nd CONTENT
				</Tab>
				<Tab eventKey="tab3" title="tab 3" disabled>
					2nd CONTENT
				</Tab>
			</Tabset>
		</div>
	);
}

export const TabsetPage = withOptions(TabsetPageBase);
