import React from 'react';
import styles from './SpeedDialActions.module.scss';

interface ISpeedDialActionsProps {
	children: any;
}

export const SpeedDialActions = (props: ISpeedDialActionsProps) => {

	const { children } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.speedDialActions);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()}>
			{children}
		</div>
	);
}
