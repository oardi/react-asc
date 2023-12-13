import React from 'react';
import { Color } from '../../../enums';
import styles from './Dot.module.scss';

export interface IDot extends React.ComponentProps<'div'> {
	color?: Color;
	isActive?: boolean;
}

export const Dot = (props: IDot): JSX.Element => {
	const { className, color = Color.primary, isActive, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.dot);
		cssClasses.push(styles[color]);
		isActive && cssClasses.push(styles.isActive);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return <div className={getCssClasses()} {...rest}></div>;
};
