import React from 'react';
import styles from './Column.module.scss';
import type { ColumnSize } from './column.types';

interface IColProps extends React.ComponentProps<'div'> {
	size?: ColumnSize;
}

export const Column = (props: IColProps): JSX.Element => {
	const { children, className, size, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.column);
		size && cssClasses.push(styles[`column-${size}`]);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
