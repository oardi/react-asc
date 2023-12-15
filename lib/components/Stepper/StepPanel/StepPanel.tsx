import type { ReactNode } from 'react';

export interface IStepPanelProps {
	children?: ReactNode;
}

export const StepPanel = (props: IStepPanelProps): JSX.Element => {
	const { children } = props;

	return <div className="steppanel">{children}</div>;
};
