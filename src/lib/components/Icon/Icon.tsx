import React from 'react';
import { COLOR } from '../component.enums';
import styles from './Icon.module.scss';

export interface IIconProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: React.ReactNode;
	iconColor?: COLOR;
}

export const Icon = (props: IIconProps) => {

	const { children, iconColor, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.icon);
		iconColor && cssClasses.push(styles[iconColor]);
		className && cssClasses.push(className);
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
