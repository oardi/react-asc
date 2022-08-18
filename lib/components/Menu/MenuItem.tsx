import React from 'react';
import { IListItemProps, ListItem } from '../List';

export const MenuItem = (props: IListItemProps): JSX.Element => {

	const { children, onClick, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
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
