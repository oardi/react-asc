import React, { ReactNode, useState } from 'react';
import { ExpansionPanelContent } from './ExpansionPanelContent';
import { ExpansionPanelHeader } from './ExpansionPanelHeader';

export interface IExpansionPanelProps {
	header: ReactNode;
	children: ReactNode;
	isExpanded?: boolean;
	// shadow
}

export const ExpansionPanel = ({ header, children, isExpanded }: IExpansionPanelProps) => {
	const [_isExpanded, setIsExpanded] = useState<boolean>(isExpanded);


	const handleClickHeader = () => {
		console.warn('handleClickHeader');
		setIsExpanded(!_isExpanded);
	}

	return (
		<div className="expansion-panel">
			<ExpansionPanelHeader isExpanded={_isExpanded} onClick={handleClickHeader}>
				{header}
			</ExpansionPanelHeader>

			{_isExpanded &&
				<ExpansionPanelContent>{children}</ExpansionPanelContent>
			}
		</div>
	);
}
