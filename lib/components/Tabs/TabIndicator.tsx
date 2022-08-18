import React from 'react';
import { COLOR } from '../component.enums';
import styles from './TabIndicator.module.scss';

export interface ITabIndicatorProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	amount?: number;
	index?: number;
	color?: COLOR;
	width?: string;
	left?: number;
}

export const TabIndicator = (props: ITabIndicatorProps): JSX.Element => {

	const { color = COLOR.primary, width, amount, index } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.tabIndicator);
		cssClasses.push(styles[color]);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<span
			className={getCssClasses()}
			style={{
				width: width,
				left: `calc(calc(100% / ${amount}) * ${index})`
			}}>
			</span>
	);
};
