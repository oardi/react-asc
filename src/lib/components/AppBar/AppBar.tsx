import React, { ReactNode } from 'react';
import { COLOR } from '../component.enums';
// import './AppBar.scss';

export interface IAppBarProps {
	children?: ReactNode;
	color?: COLOR;
	shadow?: boolean | 'sm' | 'md' | 'lg';
}

export const AppBar = (props: IAppBarProps) => {

	const { children, color = COLOR.primary, shadow = false, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`navbar navbar-expand`);
		cssClasses.push(`bg-${color}`);
		cssClasses.push('navbar-dark');
		shadow && cssClasses.push('shadow');
		return cssClasses.join(' ');
	};

	return (
		<nav className={getCssClasses()} {...rest}>
			{children}
		</nav>
	);
};
