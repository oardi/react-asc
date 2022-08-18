import React from 'react';
import { SpinnerSolidIcon } from '../../icons';
import styles from './LoadingIndicator.module.scss';

export const LoadingIndicator = ({ ...rest }: React.ComponentProps<'div'>): JSX.Element => {

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.loadingIndicator);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			<SpinnerSolidIcon />
		</div>
	);
};
