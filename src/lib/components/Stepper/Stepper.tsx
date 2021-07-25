import React, { cloneElement, Fragment, PropsWithChildren, ReactChild, ReactElement, useEffect, useState } from 'react';
import { IStepProps } from './Step';
import { StepperActions } from './StepperActions';
import { StepPanel } from './StepPanel/StepPanel';
import { StepConnector } from './StepConnector/StepConnector';
import styles from './Stepper.module.scss';

export interface IStepperProps {
	children?: ReactElement<IStepProps> | Array<ReactElement<IStepProps>>;
	isLinear?: boolean;
	isDisabled?: boolean;
	showLabel?: boolean;
	showProgressCheckIcon?: boolean;
	isHorizontal?: boolean;

	onChange?: (val: number) => void;
	onFinish?: () => void;

	// TODOs
	alternativeLabel?: boolean; // place underneath
	value?: number; // active step as string?
	isReadonly?: boolean;
}

export const Stepper = (props: IStepperProps) => {
	const { children, isLinear = true, showLabel = true, showProgressCheckIcon = false, value, isHorizontal = true, onChange, onFinish } = props;

	const [steps, setSteps] = useState<(ReactElement<IStepProps>)[]>();

	const [activeIndex, setActiveIndex] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set<number>());

	useEffect(() => {
		if (children) {
			setSteps(React.Children.toArray(children) as (ReactElement<IStepProps>)[]);
		}
	}, [children]);

	useEffect(() => {
		if (value !== undefined) {
			setActiveIndex(value);
		}
	}, [value]);

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleClickStep = (event: any, newValue: string, index: number) => {
		setActiveIndex(() => {
			onChange && onChange(index);
			return index;
		});
	}

	const renderSteps = (child: ReactChild, index: number) => {
		return React.isValidElement(child) &&
			cloneElement((child as ReactElement<PropsWithChildren<IStepProps>>), {
				index: index,
				isActive: activeIndex >= index,
				isDone: activeIndex > index,
				isDisabled: isLinear && (activeIndex + 1 < index),
				showLabel: showLabel,
				showProgressCheckIcon: showProgressCheckIcon,
				onClick: (event: any, val: string) => handleClickStep(event, val, index)
			});
	}



	const isStepOptional = (index: number) => {
		return steps && steps[index].props.isOptional;
	};

	const handleBack = () => {
		setActiveIndex((prevActiveStep) => {
			const newIndex = prevActiveStep - 1;
			onChange && onChange(newIndex);
			return newIndex;
		});
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

			setActiveIndex((prevActiveStep) => {
				const newIndex = prevActiveStep + 1;
				onChange && onChange(newIndex);
				return newIndex;
			});
			setSkipped(newSkipped);
		} else {
			onFinish && onFinish();
		}
	}

	const handleReset = () => {
		setActiveIndex(0);
		onChange && onChange(0);
	};

	const isLastStep = () => {
		return steps && activeIndex === steps.length - 1;
	}

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.stepper);
		isHorizontal && cssClasses.push(styles['isHorizontal' as any]);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<>
			{steps &&
				<>
					<div className={getCssClasses()}>
						{
							steps.map(
								(child, index) => (
									<React.Fragment key={child.props.value}>
										{renderSteps(child as ReactChild, index)}
										{index !== steps.length - 1 && <StepConnector isActive={activeIndex > index} />}
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
