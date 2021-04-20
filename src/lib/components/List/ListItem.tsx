import React, { MouseEvent, ReactNode } from 'react';
import styles from './ListItem.module.scss';

export interface IListItemProps {
	children?: ReactNode;
	active?: boolean;
	className?: string;
	isHoverable?: boolean;
	isDisabled?: boolean;
	onClick?: (e: MouseEvent) => void;
}

export const ListItem = (props: IListItemProps) => {

	const { children, active = false, className, isHoverable = false, isDisabled = false, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		if (active) {
			cssClasses.push(styles['active']);
		}
		if (isHoverable) {
			cssClasses.push(`list-group-item-action`);
		}
		if (isDisabled) {
			cssClasses.push(`disabled`);
		}
		if (className) {
			cssClasses.push(className);
		}
		cssClasses.push(styles.listItem);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		onClick && onClick(e);
	};

	return (
		<li onClick={handleClick} className={getCssClasses()}>
			{children}
		</li>
	);
}
