import React, { ReactNode } from 'react';
import { COLOR, SIZE } from '../component.enums';
import styles from './AppBar.module.scss';

export interface IAppBarProps extends React.ComponentProps<"nav"> {
	children?: ReactNode;
	className?: string;
	color?: COLOR.primary | COLOR.light;
	shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}

export const AppBar = (props: IAppBarProps) => {

	const { children, className, color = COLOR.primary, shadow = true, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
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
