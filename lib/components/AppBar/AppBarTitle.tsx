import type { ReactNode } from 'react';
import React from 'react';
import styles from './AppBarTitle.module.scss';

export interface IAppBarTitleProps extends React.ComponentProps<'div'> {
	children?: ReactNode;
}

export const AppBarTitle = (props: IAppBarTitleProps): JSX.Element => {
	const { children, className, onClick } = props;

	const getCssClass = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.appbarTitle);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return (
		<div className={getCssClass()} onClick={onClick}>
			{children}
		</div>
	);
};
