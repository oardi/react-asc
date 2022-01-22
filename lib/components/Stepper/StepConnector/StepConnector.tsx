import React from 'react';
import styles from './StepConnector.module.scss';

export interface IStepConnectorProps {
	isActive?: boolean; // rename in isChecked?
	isHorizontal?: boolean;
}

export const StepConnector = (props: IStepConnectorProps) => {

	const { isActive, isHorizontal = true } = props;

	const getCssClassesConnector = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.stepConnector);
		return cssClasses.filter(css => css).join(' ');
	}

	const getCssClassesLine = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.stepConnectorLine);
		isActive && cssClasses.push(styles['isActive' as any]);
		isHorizontal && cssClasses.push(styles.stepConnectorLineHorizontal);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div className={getCssClassesConnector()}>
			<div className={getCssClassesLine()}></div>
		</div>
	)
}
