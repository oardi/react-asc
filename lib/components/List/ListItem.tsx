import React from 'react';
import { COLOR } from '../component.enums';
import styles from './ListItem.module.scss';

export interface IListItemProps extends React.ComponentProps<'li'> {
	color?: COLOR;
	active?: boolean;
	isHoverable?: boolean;
	disabled?: boolean;
}

export const ListItem = (props: IListItemProps) => {

	const { children, color, active, className, disabled, onClick, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.listItem);
		color && cssClasses.push(styles[color]);
		active && cssClasses.push(styles['active']);
		disabled && cssClasses.push(styles['disabled']);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		!disabled && onClick && onClick(e);
	};

	return (
		<li
			onClick={handleClick}
			className={getCssClasses()}
			{...rest}
		>
			{children}
		</li>
	);
};
