import React from 'react';
import { ExpansionPanel, IExpansionPanelProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const ExpansionPanelPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IExpansionPanelProps>) => {

	return (
		<>
			<ExpansionPanel header={'header 1'}>
				Some Content 1
			</ExpansionPanel>
			<ExpansionPanel header={'header 2'}>
				Some Content 2
			</ExpansionPanel>
		</>
	);
}

export const ExpansionPanelPage = withOptions<IExpansionPanelProps>(ExpansionPanelPageBase);
