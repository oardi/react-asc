import React, { ReactNode } from 'react';
import { CheckSolidIcon, CircleSolidIcon } from '../../../assets/icons';
import { useHover } from '../../../hooks';
import { COLOR } from '../../component.enums';
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
	onClick?: (event: any, value: string) => void;
}

export const Step = (props: IStepProps) => {

	const { className, label, showLabel, index, value, isActive, isDone, isDisabled, showProgressCheckIcon, onClick } = props;
	const [hoverRef, isHovered] = useHover();

	const handleClick = (e: any) => {
		if (!isDisabled) {
			onClick && onClick(e, value);
		}
	}

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.stepWrapper);
		label && showLabel && cssClasses.push(styles['hasLabel']);
		isDisabled && cssClasses.push(styles['disabled']);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const getCssClassesStep = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.step);
		label && showLabel && cssClasses.push(styles['hasLabel']);
		isDisabled && cssClasses.push(styles['disabled']);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div ref={hoverRef as any} className={getCssClasses()} onClick={handleClick}>

			<div className={getCssClassesStep()}>
				<Icon className={styles.stepIconCircle} iconColor={(isHovered || isActive) && !isDisabled ? COLOR.primary : COLOR.secondary}>
					<CircleSolidIcon />
				</Icon>

				<div className={styles.stepValue + ' ' + (isActive ? (styles.stepValue['isActive' as any]) : '')}>
					{showProgressCheckIcon && isActive && isDone ?
						<Icon>
							<CheckSolidIcon />
						</Icon>
						:
						<Typography>
							{(index as number) + 1}
						</Typography>
					}
				</div>
			</div>

			{label && showLabel &&
				<Typography className="flex-shrink-0">
					{label}
				</Typography>
			}
		</div>
	);
}
