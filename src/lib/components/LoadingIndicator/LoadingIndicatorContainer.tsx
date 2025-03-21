import React from 'react';
import styles from './LoadingIndicator.module.scss';

export interface ILoadingIndicatorContainerProps {
	children: React.ReactNode;
	isFixed?: boolean;
}

export const LoadingIndicatorContainer = ({ children, isFixed }: ILoadingIndicatorContainerProps): React.JSX.Element => {
	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.loadingIndicatorContainer);
		isFixed && cssClasses.push(styles.isFixed);
		return cssClasses.filter(css => css).join(' ');
	};

	return <div className={getCssClasses()}>{children}</div>;
};
