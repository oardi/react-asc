import React, { ReactNode } from "react";
import { COLOR } from '../component.enums';
import styles from './Chip.module.scss';

export interface IChipProps {
	color?: COLOR;
	children?: ReactNode;
	className?: string;
	shadow?: boolean;
	onClick?: (e: MouseEvent) => void;
}

export const Chip = (props: IChipProps) => {

	const { children, color = 'secondary', className, shadow, onClick, ...rest } = props;

	const getCssClass = () => {
		const result = [];
		result.push(styles.chip);
		result.push(styles[color]);
		shadow && result.push(styles['shadow']);
		onClick && result.push(styles['clickable']);
		result.push(className);
		return result.filter(r => r).join(' ');
	}

	return (
		<div className={getCssClass()} {...rest}>
			{children}
		</div>
	);
}
