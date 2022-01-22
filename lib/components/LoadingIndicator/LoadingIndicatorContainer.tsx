import React from 'react';
import styles from './LoadingIndicator.module.scss';

export interface ILoadingIndicatorContainerProps {
	children: React.ReactNode;
}

export const LoadingIndicatorContainer = ({ children }: ILoadingIndicatorContainerProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.loadingIndicatorContainer);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div className={getCssClasses()}>
			{children}
		</div>
	);
}
