import React from 'react';
import styles from './Icon.module.scss';

export interface IIconProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
}

export const Icon = (props: IIconProp) => {

	const { children, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.icon);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div
			className={getCssClasses()}
			{...rest}
		>
			{children}
		</div>
	);
}
