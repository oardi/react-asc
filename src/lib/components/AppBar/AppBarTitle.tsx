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
		const result = [];
		result.push(className);
		result.push(styles.appbarTitle);
		return result.filter(r => r).join(' ');
	}

	return (
		<div className={getCssClass()} onClick={() => onClick && onClick()}>
			{children}
		</div>
	)
}
