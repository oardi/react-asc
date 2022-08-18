import React from 'react';
import { IListItemProps, ListItem } from '../List';

export const MenuItem = (props: IListItemProps) => {

	const { children, onClick, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		e.stopPropagation();
		onClick && onClick(e);
	};

	return (
		<ListItem
			className={getCssClasses()}
			onClick={handleClick}
			{...rest}
		>
			{children}
		</ListItem>
	);
};
