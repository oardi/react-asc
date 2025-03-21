import type { ReactNode } from 'react';
import React from 'react';
import type { SIZE } from '../../enums';
import { Color } from '../../enums';
import styles from './AppBar.module.scss';

export interface IAppBarProps extends React.ComponentProps<'nav'> {
	children?: ReactNode;
	className?: string;
	color?: Color;
	shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}

export const AppBar = (props: IAppBarProps): React.JSX.Element => {
	const { children, className, color = Color.primary, shadow = true, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles[color]);
		cssClasses.push(styles.appbar);
		shadow && cssClasses.push(styles['shadow']);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return (
		<nav className={getCssClasses()} {...rest}>
			{children}
		</nav>
	);
};
