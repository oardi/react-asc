import React, { cloneElement, Fragment, PropsWithChildren, ReactChild, ReactElement, useEffect, useState } from 'react';
import { IStepProps } from './Step';
import { StepperActions } from './StepperActions';
import styles from './Stepper.module.scss';
import { StepPanel } from './StepPanel/StepPanel';
import { StepConnector } from './StepConnector/StepConnector';

export interface IStepperProps {
	children?: ReactElement<IStepProps> | Array<ReactElement<IStepProps>>;
	isLinear?: boolean;
	isDisabled?: boolean;
	showLabel?: boolean;

	onChange?: (val: number) => void;
	onFinish?: () => void;

	// TODOs
	alternativeLabel?: boolean; // place underneath
	value?: string; // active step?
	isReadonly?: boolean;
	showProgressCheckIcon?: boolean; // statt index -> checked icon
}

export const Stepper = (props: IStepperProps) => {
	const { children, isLinear = true, showLabel = true, onChange, onFinish } = props;
	const [isInit, setIsInit] = useState<boolean>(false);

	const [steps, setSteps] = useState<(ReactElement<IStepProps>)[]>();

	const [activeIndex, setActiveIndex] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set<number>());

	useEffect(() => {
		if (!isInit && children) {
			setSteps(React.Children.toArray(children) as (ReactElement<IStepProps>)[]);
			setIsInit(true);
		}
	}, [children]);

	useEffect(() => {
		if (isInit) {
			onChange && onChange(activeIndex);
		}
	}, [activeIndex]);

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleClickStep = (event: any, newValue: string, index: number) => {
		setActiveIndex(index);
	}

	const renderSteps = (child: ReactChild, index: number) => {
		return React.isValidElement(child) &&
			cloneElement((child as ReactElement<PropsWithChildren<IStepProps>>), {
				index: index,
				isActive: activeIndex >= index,
				isDisabled: isLinear && (activeIndex + 1 < index),
				showLabel: showLabel,
				onClick: (event: any, val: string) => handleClickStep(event, val, index)
			});
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
		if (!isLastStep()) {
			let newSkipped = skipped;
			if (isStepSkipped(activeIndex)) {
				newSkipped = new Set(newSkipped.values());
				newSkipped.delete(activeIndex);
			}

			setActiveIndex((prevActiveStep) => prevActiveStep + 1);
			setSkipped(newSkipped);
		} else {
			onFinish && onFinish();
		}
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
										{index !== steps.length - 1 && <StepConnector />}
									</React.Fragment>
								)
							)
						}
					</div>

					{
						steps && steps.map((step, index) =>
							<Fragment key={step.props.value}>
								{index === activeIndex &&
									<StepPanel>
										{step.props.children}
									</StepPanel>
								}
							</Fragment>
						)
					}

					<StepperActions
						className="mt-3"
						isFirstStep={activeIndex === 0}
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
