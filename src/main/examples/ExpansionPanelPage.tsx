import { ExpansionPanel } from 'lib';
import React from 'react';
import { withOptions } from './components';

const ExpansionPanelPageBase = (): JSX.Element => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panelKey: string) => (event: React.MouseEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panelKey : false);
	};

	return (
		<>
			<h3>Simple ExpansionPanel</h3>
			<div>
				<ExpansionPanel header={'header 1'}>Some Content 1</ExpansionPanel>
				<ExpansionPanel header={'header 2'} isExpanded={true}>
					Some Content 2
				</ExpansionPanel>
				<ExpansionPanel header={'header 3'}>Some Content 3</ExpansionPanel>
			</div>

			<h3 className="mt-3">Controlled ExpansionPanel</h3>
			<div>
				<ExpansionPanel header={'header 1'} onToggle={handleChange('panel1')} isExpanded={expanded === 'panel1'}>
					Some Content 1
				</ExpansionPanel>
				<ExpansionPanel header={'header 2'} onToggle={handleChange('panel2')} isExpanded={expanded === 'panel2'}>
					Some Content 2
				</ExpansionPanel>
				<ExpansionPanel header={'header 3'} onToggle={handleChange('panel3')} isExpanded={expanded === 'panel3'}>
					Some Content 3
				</ExpansionPanel>
			</div>
		</>
	);
};

export const ExpansionPanelPage: () => JSX.Element = withOptions(ExpansionPanelPageBase, null, 'ExpansionPanelPageBase');
