import React from 'react';
import { SpinnerSolidIcon } from '../../assets/icons';
import styles from './LoadingIndicator.module.scss';

export interface ILoadingIndicatorProps {
}

export const LoadingIndicator = () => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.loadingIndicator);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div className={getCssClasses()}>
			<SpinnerSolidIcon />
		</div>
	);
}
