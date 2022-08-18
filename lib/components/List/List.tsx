import React from 'react';
import styles from './List.module.scss';

export interface IListProps extends React.ComponentProps<'ul'> {
	isFlush?: boolean;
}

export const List = (props: IListProps) => {

	const { children, className, isFlush, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		isFlush && cssClasses.push(styles.flush);
		cssClasses.push(styles.list);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ul className={getCssClasses()} {...rest}>
			{children}
		</ul>
	);
};
