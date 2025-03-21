import type { ReactNode } from 'react';
import React from 'react';
import { Color } from '../../../enums';
import { useHover } from '../../../hooks';
import { CheckSolidIcon, CircleSolidIcon } from '../../../icons';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import styles from './Step.module.scss';

export interface IStepProps {
	value: string;
	index?: number;
	label?: ReactNode;
	children?: ReactNode;
	showLabel?: boolean;
	isActive?: boolean; // rename in isChecked?
	isDone?: boolean;
	isDisabled?: boolean;
	isOptional?: boolean;
	className?: string;
	showProgressCheckIcon?: boolean;
	onClick?: (e: { event: React.MouseEvent; value: string }) => void;
}

export const Step = (props: IStepProps): React.JSX.Element => {
	const { className, label, showLabel, index, value, isActive, isDone, isDisabled, showProgressCheckIcon, onClick } = props;
	const [hoverRef, isHovered] = useHover();

	const handleClick = (event: React.MouseEvent): void => {
		if (!isDisabled) {
			onClick && onClick({ event: event, value: value });
		}
	};

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.stepWrapper);
		label && showLabel && cssClasses.push(styles['hasLabel']);
		isDisabled && cssClasses.push(styles['disabled']);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const getCssClassesStep = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.step);
		label && showLabel && cssClasses.push(styles['hasLabel']);
		isDisabled && cssClasses.push(styles['disabled']);
		return cssClasses.filter(css => css).join(' ');
	};

	const getCssClassesStepValue = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.stepValue);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		isActive && cssClasses.push((styles.stepValue as any)['isActive']);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div ref={hoverRef as React.MutableRefObject<null>} className={getCssClasses()} onClick={handleClick}>
			<div className={getCssClassesStep()}>
				<Icon
					className={styles.stepIconCircle}
					iconColor={(isHovered || isActive) && !isDisabled ? Color.primary : Color.secondary}>
					<CircleSolidIcon />
				</Icon>

				<div className={getCssClassesStepValue()}>
					{showProgressCheckIcon && isActive && isDone ? (
						<Icon>
							<CheckSolidIcon />
						</Icon>
					) : (
						<Typography>{(index as number) + 1}</Typography>
					)}
				</div>
			</div>

			{label && showLabel && <Typography className="flex-shrink-0">{label}</Typography>}
		</div>
	);
};
