import React from 'react';
import { SpinnerSolidIcon } from '../../icons';
import styles from './LoadingIndicator.module.scss';

export interface ILoadingIndicatorProps {
}

export const LoadingIndicator = ({ ...rest }: React.ComponentProps<"div">) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.loadingIndicator);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div className={getCssClasses()} {...rest}>
			<SpinnerSolidIcon />
		</div>
	);
}
