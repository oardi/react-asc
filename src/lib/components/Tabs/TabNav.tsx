/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react';
import styles from './TabNav.module.scss';

export interface ITabNavProps {
	value: string;
	disabled?: boolean;
	children?: ReactNode;
	isActive?: boolean;
	onClick?: (event: any, key: string) => void;
}

export const TabNav = (props: ITabNavProps) => {

	const { value, disabled, children, isActive, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('nav-link');
		cssClasses.push(styles.tab);
		if (isActive) {
			cssClasses.push(`active`);
		}
		if (disabled) {
			cssClasses.push(`disabled`);
		}

		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<li key={value} className={"nav-item" + (disabled ? ' disabled' : '')}>
			<a
				className={getCssClasses()}
				onClick={(event) => !disabled && onClick && onClick(event, value)}>
				{children}
			</a>
		</li>
	);
}
