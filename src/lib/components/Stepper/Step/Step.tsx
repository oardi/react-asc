import React, { ReactNode } from 'react';
import { CircleSolidIcon } from '../../../assets/icons';
import { COLOR } from '../../component.enums';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import styles from './Step.module.scss';

export interface IStepProps {
	index?: number;
	label: ReactNode;
	isActive?: boolean;
	value: string;
	onClick?: (event: any, value: string) => void;
}

export const Step = (props: IStepProps) => {

	const { label, index, value, isActive, onClick } = props;

	const handleClick = (e: any) => {
		console.warn('handleClick step');
	}

	return (
		<div className={styles.stepWrapper} onClick={handleClick}>

			<div className={styles.step}>
				<Icon className={styles.stepIconCircle} iconColor={COLOR.secondary}>
					<CircleSolidIcon />
				</Icon>

				<div className={styles.stepValue + ' ' + (isActive ? (styles.stepValue['isActive' as any]) : undefined)}>
					<Typography>
						{index}
					</Typography>
				</div>
			</div>

			<Typography>
				{label}
			</Typography>
		</div>
	);
}
