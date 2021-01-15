import React, { ReactNode } from 'react';
import { COLOR } from '../component.enums';

export interface IAppBarProps {
	children?: ReactNode;
	color?: COLOR;
	shadow?: boolean | 'sm' | 'md' | 'lg';
}

export const AppBar = ({
	children,
	color = COLOR.primary,
	shadow = false
}: IAppBarProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`navbar navbar-expand`);
		cssClasses.push(`bg-${color}`);
		cssClasses.push('navbar-dark');
		shadow && cssClasses.push('shadow');
		return cssClasses.join(' ');
	};

	return (
		<nav className={getCssClasses()}>
			{children}
		</nav>
	);
};
