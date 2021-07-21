import React, { ReactElement } from 'react';
import { IStepProps } from './Step';

export interface IStepperProps {
	children?: ReactElement<IStepProps> | Array<ReactElement<IStepProps>>;
	// activeStep
	nonLinear?: boolean;
	alternativeLabel?: boolean; // place underneath
	value?: string;
}

export const Stepper = (props: IStepperProps) => {
	return (
		<div>
			coming soon
		</div>
	);
}
