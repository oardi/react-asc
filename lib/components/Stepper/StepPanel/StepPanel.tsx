import React, { ReactNode } from 'react';

export interface IStepPanelProps {
	children?: ReactNode;
}

export const StepPanel = (props: IStepPanelProps) => {

	const { children } = props;

	return (
		<div className="steppanel">
			{children}
		</div>
	);
}
