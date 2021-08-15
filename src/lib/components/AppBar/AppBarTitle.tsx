import React, { ReactNode } from 'react'
import styles from './AppBarTitle.module.scss';

export interface IAppBarTitleProps {
	children?: ReactNode;
	onClick?: () => void;
	className?: string;
}

export const AppBarTitle = (props: IAppBarTitleProps) => {

	const { children, className, onClick } = props;

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.appbarTitle);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	}

	return (
		<div className={getCssClass()} onClick={() => onClick && onClick()}>
			{children}
		</div>
	)
}
