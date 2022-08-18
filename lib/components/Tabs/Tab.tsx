import React, { ReactNode } from 'react';
import { Button } from '../Button';
import styles from './Tab.module.scss';
import { useTabContext } from './TabContext';

export interface ITabProps {
	label: ReactNode;
	value: string;
	disabled?: boolean;
	className?: string;
	onClick?: (e: { event: React.MouseEvent, value: string }) => void;
}

export const Tab = (props: ITabProps): JSX.Element => {

	const { label, className, disabled, value, onClick } = props;

	const { selectedValue, setSelectedValue } = useTabContext();

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.tab);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (event: React.MouseEvent): void => {
		onClick && onClick({ event, value });
		setSelectedValue && setSelectedValue(value);
	};

	return (
		<Button
			className={getCssClasses()}
			onClick={handleClick}
			isActive={selectedValue === value}
			disabled={disabled}
		>
			{label}
		</Button>
	);
};
