import React from 'react';
import styles from './SpeedDialActions.module.scss';

export const SpeedDialActions = (props: React.ComponentProps<'div'>): JSX.Element => {

	const { children } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.speedDialActions);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()}>
			{children}
		</div>
	);
};
