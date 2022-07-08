import React, { useEffect } from 'react';
import { COLOR } from '../component.enums';
import styles from './ProgressBar.module.scss';

export interface IProgressBarProps extends React.ComponentProps<'div'> {
	className?: string;
	color?: COLOR;
	value?: number;
	indeterminate?: boolean;
}

export const ProgressBar = (props: IProgressBarProps) => {

	const { className, color = COLOR.primary, value, indeterminate, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.progressBarContainer);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	const getCssClassesBar = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.progressBar);
		indeterminate && cssClasses.push(styles['indeterminate']);
		return cssClasses.filter(r => r).join(' ');
	};

	useEffect(() => {
		document.body.style.setProperty(
			'--progress-bar-bg',
			`var(--${color})`
		);
	}, [color]);

	return (
		<div className={getCssClasses()} {...rest}>
			<div
				className={getCssClassesBar()}
				style={{ 'width': `${(!indeterminate && value && value > 0) ? value : 100}%` }}
				role="progressbar"
			>
			</div>
		</div>
	);
};
