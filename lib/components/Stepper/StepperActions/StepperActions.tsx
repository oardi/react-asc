import React from 'react';
import { CheckSolidIcon, ChevronLeftSolidIcon, ChevronRightSolidIcon } from '../../../icons';
import { Button } from '../../Button';
import { COLOR, VARIANT } from '../../component.enums';
import styles from './StepperActions.module.scss';

export interface IStepperActionsProps {
	className?: string;
	isCompleted?: boolean;
	isFirstStep?: boolean;
	isStepOptional?: boolean;
	onBack?: () => void;
	onSkip?: () => void;
	onNext?: () => void;
	onReset?: () => void;
}

export const StepperActions = (props: IStepperActionsProps) => {

	const { className, isCompleted, isFirstStep, isStepOptional, onBack, onSkip, onNext, onReset } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.stepperActions);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()}>
			<Button
				className="mr-2"
				variant={VARIANT.outline}
				disabled={isFirstStep}
				startIcon={!isFirstStep ? <ChevronLeftSolidIcon /> : undefined}
				onClick={() => onBack && onBack()}
			>
				Back
			</Button>

			<div className="ml-auto">
				{isCompleted && (
					<Button
						className="mr-2"
						color={COLOR.secondary}
						variant={VARIANT.text}
						onClick={() => onReset && onReset()}
					>
						Reset
					</Button>
				)}

				{isStepOptional && (
					<Button
						className="mr-2"
						variant={VARIANT.contained}
						color={COLOR.primary}
						onClick={() => onSkip && onSkip()}
					>
						Skip
					</Button>
				)}
				<Button
					variant={VARIANT.contained}
					color={COLOR.primary}
					startIcon={isCompleted ? <CheckSolidIcon /> : undefined}
					endIcon={!isCompleted ? <ChevronRightSolidIcon /> : undefined}
					onClick={() => onNext && onNext()}
				>
					{isCompleted ? 'Done' : 'Next'}
				</Button>
			</div>
		</div>
	);
};
