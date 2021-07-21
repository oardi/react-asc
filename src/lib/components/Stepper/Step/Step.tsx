import React, { ReactNode } from 'react';
import { CircleSolidIcon } from '../../../assets/icons';
import { useHover } from '../../../hooks';
import { COLOR } from '../../component.enums';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import styles from './Step.module.scss';

export interface IStepProps {
	index?: number;
	label?: ReactNode;
	isActive?: boolean;
	isOptional?: boolean;
	value: string;
	className?: string;
	onClick?: (event: any, value: string) => void;
}

export const Step = (props: IStepProps) => {

	const { className, label, index, value, isActive, onClick } = props;
	const [hoverRef, isHovered] = useHover();

	const handleClick = (e: any) => {
		onClick && onClick(e, value);
	}

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.stepWrapper);
		label && cssClasses.push(styles['hasLabel']);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const getCssClassesStep = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.step);
		label && cssClasses.push(styles['hasLabel']);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div ref={hoverRef as any} className={getCssClasses()} onClick={handleClick}>

			<div className={getCssClassesStep()}>
				<Icon className={styles.stepIconCircle} iconColor={isHovered || isActive ? COLOR.primary : COLOR.secondary}>
					<CircleSolidIcon />
				</Icon>

				<div className={styles.stepValue + ' ' + (isActive ? (styles.stepValue['isActive' as any]) : undefined)}>
					<Typography>
						{(index as number) + 1}
					</Typography>
				</div>
			</div>

			{label &&
				<Typography>
					{label}
				</Typography>
			}
		</div>
	);
}
