import React, { useEffect, useState } from 'react';
import { COLOR } from '../component.enums';
import { Tooltip } from '../Tooltip';
import styles from './ProgressBar.module.scss';

export interface IProgressBarProps extends React.ComponentProps<'div'> {
	className?: string;
	color?: COLOR;
	value?: number;
	indeterminate?: boolean;
}

export const ProgressBar = (props: IProgressBarProps) => {

	const { className, color = COLOR.primary, value, indeterminate, ...rest } = props;
	const [model, setModel] = useState<number>();

	useEffect(() => {
		document.body.style.setProperty(
			'--progress-bar-bg',
			`var(--${color})`
		);
	}, [color]);

	useEffect(() => {
		let newValue = value;
		if (value && value < 0) {
			newValue = 0;
		}
		if (value && value > 100) {
			newValue = 100;
		}
		setModel(newValue);
	}, [value]);

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

	const getStyle = () => {
		let width = model && model >= 0 ? model : 0;
		if (indeterminate) {
			width = 100;
		}
		return `${width}%`;
	};

	return (
		<Tooltip text={!indeterminate ? model?.toString() : ''}>
			<div className={getCssClasses()} {...rest}>
				<div
					className={getCssClassesBar()}
					style={{ 'width': getStyle() }}
					role="progressbar"
				>
				</div>
			</div>
		</Tooltip>
	);
};
