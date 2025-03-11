import React from 'react';
import type { IListItemProps } from '../List';
import { ListItem } from '../List';

export const MenuItem = (props: IListItemProps): React.JSX.Element => {
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
		<ListItem className={getCssClasses()} onClick={handleClick} {...rest}>
			{children}
		</ListItem>
	);
};
