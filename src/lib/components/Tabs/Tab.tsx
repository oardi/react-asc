import React, { ReactNode } from 'react';
import { Button } from '../Button';
import styles from './Tab.module.scss';

export interface ITabProps {
	label: ReactNode;
	value: string;
	isActive?: boolean;
	disabled?: boolean;
	className?: string;
	onClick?: (event: any, value: string) => void;
}

export const Tab = (props: ITabProps) => {

	const { label, className, isActive, disabled, value, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.tab);
		if (isActive) {
			cssClasses.push(`show active`);
		}
		if (className) {
			cssClasses.push(className);
		}
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<Button
			className={getCssClasses()}
			onClick={(event) => onClick && onClick(event, value)}
			isActive={isActive}
			disabled={disabled}
		>
			{label}
		</Button>
	)
}
