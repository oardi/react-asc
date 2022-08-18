import React from 'react';
import styles from './SpeedDialActions.module.scss';

export const SpeedDialActions = (props: React.ComponentProps<'div'>) => {

	const { children } = props;

	const getCssClasses = () => {
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
