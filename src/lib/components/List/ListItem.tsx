import React, { ReactNode } from 'react';
import { COLOR } from '../component.enums';
import styles from './ListItem.module.scss';

export interface IListItemProps {
	id?: string;
	children?: ReactNode;
	color?: COLOR;
	active?: boolean;
	className?: string;
	isHoverable?: boolean;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent) => void;
}

export const ListItem = (props: IListItemProps) => {

	const { id, children, color, active, className, isHoverable, disabled, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		if (active) {
			cssClasses.push(styles['active']);
		}
		if (isHoverable) {
			// cssClasses.push(`list-group-item-action`);
		}
		if (disabled) {
			cssClasses.push(styles['disabled']);
		}

		color && cssClasses.push(styles[color]);
		cssClasses.push(styles.listItem);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		!disabled && onClick && onClick(e);
	};

	return (
		<li id={id} onClick={handleClick} className={getCssClasses()}>
			{children}
		</li>
	);
}
