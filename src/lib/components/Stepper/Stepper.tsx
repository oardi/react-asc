import React, { cloneElement, PropsWithChildren, ReactChild, ReactElement, useEffect, useState } from 'react';
import { IStepProps } from './Step';
import { StepperActions } from './StepperActions';
import styles from './Stepper.module.scss';

export interface IStepperProps {
	children?: ReactElement<IStepProps> | Array<ReactElement<IStepProps>>;
	// activeStep
	nonLinear?: boolean;
	alternativeLabel?: boolean; // place underneath
	value?: string;
}

export const Stepper = (props: IStepperProps) => {

	// prevSteps
	// nextSteps

	const { children } = props;
	const [steps, setSteps] = useState<(ReactElement<IStepProps>)[]>();

	const [activeIndex, setActiveIndex] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set<number>());

	useEffect(() => {
		setSteps(React.Children.toArray(children) as (ReactElement<IStepProps>)[]);
	}, [children]);

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleClickStep = (event: any, newValue: string, index: number) => {
		console.warn('handleClickStep', event, newValue, index);
	}

	const renderSteps = (child: ReactChild, index: number) => {
		return React.isValidElement(child) &&
			cloneElement((child as ReactElement<PropsWithChildren<IStepProps>>), {
				index: index,
				isActive: activeIndex === index,
				onClick: (event: any, val: string) => handleClickStep(event, val, index)
			});
	}

	const renderConnector = () => {
		return (
			<div className={styles.stepConnector}>
				<div className={styles.stepConnectorLine + ' ' + styles.stepConnectorLineHorizontal}></div>
			</div>
		)
	}

	const isStepOptional = (index: number) => {
		return steps && steps[index].props.isOptional;
	};

	const handleBack = () => {
		setActiveIndex((prevActiveStep) => prevActiveStep - 1);
	}

	// TODO
	const handleSkip = () => {
		if (!isStepOptional(activeIndex)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveIndex((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeIndex);
			return newSkipped;
		});
	}

	// TODO
	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeIndex)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeIndex);
		}

		setActiveIndex((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	}

	const handleReset = () => {
		setActiveIndex(0);
	};

	const isLastStep = () => {
		return steps && activeIndex === steps.length - 1;
	}

	return (
		<>
			{steps &&
				<>
					<div className={styles.stepper}>
						{
							steps.map(
								(child, index) => (
									<React.Fragment key={child.props.value}>
										{renderSteps(child as ReactChild, index)}
										{index !== steps.length - 1 && renderConnector()}
									</React.Fragment>
								)
							)
						}
					</div>

					<StepperActions
						isStepOptional={isStepOptional(activeIndex)}
						isCompleted={isLastStep()}
						onBack={handleBack}
						onSkip={handleSkip}
						onNext={handleNext}
						onReset={handleReset}
					/>

				</>

			}
		</>
	);
}
