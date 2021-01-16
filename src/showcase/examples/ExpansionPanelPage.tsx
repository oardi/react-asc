import React from 'react';
import { ExpansionPanel, IExpansionPanelProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const ExpansionPanelPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IExpansionPanelProps>) => {

	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panelKey: string) => (event: React.MouseEvent, isExpanded) => {
		console.warn('handleChange', panelKey, JSON.stringify(isExpanded));
		setExpanded(isExpanded ? panelKey : false);
	};

	return (
		<>
			<h3>Simple ExpansionPanel</h3>
			<div>
				<ExpansionPanel header={'header 1'}>
					Some Content 1
				</ExpansionPanel>
				<ExpansionPanel header={'header 2'} isExpanded={true}>
					Some Content 2
				</ExpansionPanel>
				<ExpansionPanel header={'header 3'}>
					Some Content 3
				</ExpansionPanel>
			</div>

			<h3 className="mt-3">Controlled ExpansionPanel</h3>
			<div>
				<ExpansionPanel
					header={'header 1'}
					onChange={handleChange('panel1')}
					isExpanded={expanded === 'panel1'}>
					Some Content 1
				</ExpansionPanel>
				<ExpansionPanel
					header={'header 2'}
					onChange={handleChange('panel2')}
					isExpanded={expanded === 'panel2'}>
					Some Content 2
				</ExpansionPanel>
				<ExpansionPanel
					header={'header 3'}
					onChange={handleChange('panel3')}
					isExpanded={expanded === 'panel3'}>
					Some Content 3
				</ExpansionPanel>
			</div>
		</>
	);
}

export const ExpansionPanelPage = withOptions<IExpansionPanelProps>(ExpansionPanelPageBase);
