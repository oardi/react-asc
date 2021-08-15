import React, { ReactNode } from 'react';
import styles from './ListItem.module.scss';

export interface IListItemProps {
	id?: string;
	children?: ReactNode;
	active?: boolean;
	className?: string;
	isHoverable?: boolean;
	isDisabled?: boolean;
	onClick?: (e: React.MouseEvent) => void;
}

export const ListItem = (props: IListItemProps) => {

	const { id, children, active, className, isHoverable, isDisabled, onClick } = props;

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

		className && cssClasses.push(className);

		cssClasses.push(styles.listItem);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		onClick && onClick(e);
	};

	return (
		<li id={id} onClick={handleClick} className={getCssClasses()}>
			{children}
		</li>
	);
}
