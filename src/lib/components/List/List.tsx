import React, { ReactElement } from 'react';
import { IListItemProps } from './ListItem';
import styles from './List.module.scss';

export interface IListProps {
	children?: ReactElement<IListItemProps> | Array<ReactElement<IListItemProps>>;
	className?: string;
	isFlush?: boolean;
	// isHoverable?: boolean;
}

export const List = (props: IListProps) => {

	const { children, className = '', isFlush = false } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		if (isFlush) {
			cssClasses.push(styles.flush);
		}
		cssClasses.push(styles.list);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<ul className={getCssClasses()}>
			{children}
		</ul>
	);
}
