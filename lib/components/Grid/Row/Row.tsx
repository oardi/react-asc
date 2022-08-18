import React from 'react';
import styles from './Row.module.scss';

export interface IContainerProps extends React.ComponentProps<'div'> {
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const Row = ({ children, direction = 'row', className, ...rest }: IContainerProps): JSX.Element => {

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.row);
		className && cssClasses.push(className);
		direction && cssClasses.push(`flex-${direction}`);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
