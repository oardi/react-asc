import React from 'react';
import { Button } from '../../Button';
import { COLOR, VARIANT } from '../../component.enums';
import { Typography } from '../../Typography';

export interface IStepperActionsProps {
	isCompleted?: boolean;
	isFirstStep?: boolean;
	isStepOptional?: boolean;
	onBack?: () => void;
	onSkip?: () => void;
	onNext?: () => void;
	onReset?: () => void;
}

export const StepperActions = (props: IStepperActionsProps) => {

	const { isCompleted, isFirstStep, isStepOptional, onBack, onSkip, onNext, onReset } = props;

	return (
		<div>
			<Button variant={VARIANT.outline} disabled={isFirstStep} onClick={() => onBack && onBack()}>
				Back
			</Button>

			{isCompleted && (
				<>
					<div>
						<Typography>
							All steps completed - you&apos;re finished
						</Typography>

						<Button onClick={() => onReset && onReset()}>
							Reset
						</Button>
					</div>
				</>
			)}

			{isStepOptional && (
				<Button
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
				onClick={() => onNext && onNext()}
			>
				{isCompleted ? 'Finish' : 'Next'}
			</Button>
		</div>
	)
}
