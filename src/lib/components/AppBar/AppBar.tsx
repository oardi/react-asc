import React, { ReactNode } from 'react';
import { COLOR, SIZE } from '../component.enums';

export interface IAppBarProps {
	children?: ReactNode;
	color?: COLOR.primary | COLOR.light;
	shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}

export const AppBar = (props: IAppBarProps) => {

	const { children, color = COLOR.primary, shadow = false, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`navbar navbar-expand`);
		cssClasses.push(`bg-${color}`);
		cssClasses.push('navbar-dark');
		shadow && cssClasses.push('shadow');
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<nav className={getCssClasses()} {...rest}>
			{children}
		</nav>
	);
};
