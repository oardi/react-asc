import React, { cloneElement, PropsWithChildren, ReactChild, ReactElement, useEffect, useState } from 'react';
import { IStepProps } from './Step';
import styles from './Stepper.module.scss';

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

	const [_children, setChildren] = useState<(ReactElement<IStepProps>)[]>();

	useEffect(() => {
		setChildren(React.Children.toArray(children) as (ReactElement<IStepProps>)[]);
	}, [children]);

	const handleClickStep = (event: any, newValue: string, index: number) => {
		console.warn('handleClickStep', event, newValue, index);
	}

	const renderSteps = (child: ReactChild, index: number) => {
		return React.isValidElement(child) &&
			cloneElement((child as ReactElement<PropsWithChildren<IStepProps>>), {
				index: index + 1,
				onClick: (event: any, val: string) => handleClickStep(event, val, index)
			});
	}

	const renderConnector = (child: ReactElement<PropsWithChildren<IStepProps>>) => {
		return (
			<div className={styles.stepConnector}>
				<div className={styles.stepConnectorLine + ' ' + styles.stepConnectorLineHorizontal}></div>
			</div>
		)
	}

	return (
		<div className={styles.stepper}>
			{
				_children &&
				_children.map(
					(child, index) => (
						<React.Fragment key={child.props.value}>
							{renderSteps(child as ReactChild, index)}
							{_children.length - 1 !== index && renderConnector(child)}
						</React.Fragment>
					)
				)
			}
		</div>
	);
}
