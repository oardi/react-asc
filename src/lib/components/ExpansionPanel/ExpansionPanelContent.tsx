import React, { ReactNode } from 'react';

export interface IExpansionPanelContentProps {
	children?: ReactNode;
}

export const ExpansionPanelContent = ({ children }: IExpansionPanelContentProps) => {
	return (
		<div className="expansion-panel-content">
			{children}
		</div>
	);
}
