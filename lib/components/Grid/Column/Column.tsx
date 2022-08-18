import React from 'react';
import styles from './Column.module.scss';

interface IColProps extends React.ComponentProps<'div'> {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export const Column = (props: IColProps): JSX.Element => {

	const {
		children,
		className,
		...rest
	} = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.column);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
