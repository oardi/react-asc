import React, { ReactNode } from 'react';
import { COLOR, SIZE } from '../component.enums';
import styles from './AppBar.module.scss';

export interface IAppBarProps {
	children?: ReactNode;
	className?: string;
	color?: COLOR.primary | COLOR.light;
	shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}

export const AppBar = (props: IAppBarProps) => {

	const { children, className = '', color = COLOR.primary, shadow = true, ...rest } = props;

	const getCssClasses = () => {
		const result = [];
		result.push(styles[color]);
		result.push(styles.appbar);
		shadow && result.push(styles['shadow']);
		result.push(className);
		return result.filter(r => r).join(' ');
	};

	return (
		<nav className={getCssClasses()} {...rest}>
			{children}
		</nav>
	);
};
