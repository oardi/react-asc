import React from 'react';
import { Button } from '../../Button';
import { COLOR, VARIANT } from '../../component.enums';
import { Typography } from '../../Typography';

export interface IStepperActionsProps {
	isCompleted?: boolean;
	isFirstStep?: boolean;
	isLastStep?: boolean;
	isStepOptional?: boolean;
	onBack?: () => void;
	onSkip?: () => void;
	onNext?: () => void;
	onReset?: () => void;
}

export const StepperActions = (props: IStepperActionsProps) => {

	const { isCompleted, isFirstStep, isLastStep, isStepOptional, onBack, onSkip, onNext, onReset } = props;

	return (
		<div>
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

					<Button disabled={isFirstStep} onClick={() => onBack && onBack()}>
						Back
					</Button>
				</>
			)}

			{isStepOptional && (
				<Button
					variant={VARIANT.contained}
					color={COLOR.primary}
					onClick={()=> onSkip && onSkip()}
				>
					Skip
				</Button>
			)}
			<Button
				variant={VARIANT.contained}
				color={COLOR.primary}
				onClick={() => onNext && onNext()}
			>
				{isLastStep ? 'Finish' : 'Next'}
			</Button>
		</div>
	)
}
