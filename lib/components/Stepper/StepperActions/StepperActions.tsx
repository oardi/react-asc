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

export const StepperActions = (props: IStepperActionsProps): JSX.Element => {

	const { className, isCompleted, isFirstStep, isStepOptional, onBack, onSkip, onNext, onReset } = props;

	const getCssClasses = (): string => {
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
				onClick={(): void => onBack && onBack()}
			>
				Back
			</Button>

			<div className="ml-auto">
				{isCompleted && (
					<Button
						className="mr-2"
						color={COLOR.secondary}
						variant={VARIANT.text}
						onClick={(): void => onReset && onReset()}
					>
						Reset
					</Button>
				)}

				{isStepOptional && (
					<Button
						className="mr-2"
						variant={VARIANT.contained}
						color={COLOR.primary}
						onClick={(): void => onSkip && onSkip()}
					>
						Skip
					</Button>
				)}
				<Button
					variant={VARIANT.contained}
					color={COLOR.primary}
					startIcon={isCompleted ? <CheckSolidIcon /> : undefined}
					endIcon={!isCompleted ? <ChevronRightSolidIcon /> : undefined}
					onClick={(): void => onNext && onNext()}
				>
					{isCompleted ? 'Done' : 'Next'}
				</Button>
			</div>
		</div>
	);
};
