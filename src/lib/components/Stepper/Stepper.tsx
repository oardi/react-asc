import React, { cloneElement, PropsWithChildren, ReactChild, ReactElement } from 'react';
import { IStepProps } from './Step';

export interface IStepperProps {
	children?: ReactElement<IStepProps> | Array<ReactElement<IStepProps>>;
	// activeStep
	nonLinear?: boolean;
	alternativeLabel?: boolean; // place underneath
	value?: string;
}

export const Stepper = (props: IStepperProps) => {

	// selected
	// prevSteps
	// nextSteps

	const { children } = props;

	const handleClickStep = (event: any, newValue: string, index: number) => {
		console.warn('handleClickStep', event, newValue, index);
		// setSelectedValue(newValue);
		// setSelectedIndex(index);
		// onChange && onChange(event, newValue);
	}

	const renderSteps = (child: ReactChild, index: number) => {
		return React.isValidElement(child) && cloneElement((child as ReactElement<PropsWithChildren<IStepProps>>), {
			key: child.props.value,
			index: index + 1,
			onClick: (event: any, val: string) => handleClickStep(event, val, index)
		});
	}

	return (
		<div className="stepper">
			{
				children &&
				React.Children
					.toArray(children)
					.map(
						(child, index) => renderSteps(child as ReactChild, index)
					)
			}
		</div>
	);
}
