import { Color, VARIANT } from '../../../enums';
import { CheckSolidIcon, ChevronLeftSolidIcon, ChevronRightSolidIcon } from '../../../icons';
import { Button } from '../../Button';
import styles from './StepperActions.module.scss';

export interface IStepperActionsProps {
	className?: string;
	showDoneButton?: boolean;
	showResetButton?: boolean;
	isCompleted?: boolean;
	isFirstStep?: boolean;
	isStepOptional?: boolean;
	onBack?: () => void;
	onSkip?: () => void;
	onNext?: () => void;
	onReset?: () => void;
}

export const StepperActions = (props: IStepperActionsProps): JSX.Element => {
	const { className, showDoneButton, showResetButton, isCompleted, isFirstStep, isStepOptional, onBack, onSkip, onNext, onReset } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.stepperActions);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()}>
			{!isFirstStep && (
				<Button
					className="mr-2"
					variant={VARIANT.outline}
					startIcon={<ChevronLeftSolidIcon />}
					onClick={(): void => onBack && onBack()}>
					Back
				</Button>
			)}

			<div className="ml-auto">
				{isCompleted && showResetButton && (
					<Button color={Color.secondary} variant={VARIANT.text} onClick={(): void => onReset && onReset()}>
						Reset
					</Button>
				)}

				{isStepOptional && (
					<Button variant={VARIANT.contained} color={Color.primary} onClick={(): void => onSkip && onSkip()}>
						Skip
					</Button>
				)}

				{!isCompleted && (
					<Button
						className="ml-2"
						variant={VARIANT.contained}
						color={Color.primary}
						endIcon={<ChevronRightSolidIcon />}
						onClick={(): void => onNext && onNext()}>
						Next
					</Button>
				)}

				{isCompleted && showDoneButton && (
					<Button
						className="ml-2"
						variant={VARIANT.contained}
						color={Color.primary}
						startIcon={<CheckSolidIcon />}
						onClick={(): void => onNext && onNext()}>
						Done
					</Button>
				)}
			</div>
		</div>
	);
};
