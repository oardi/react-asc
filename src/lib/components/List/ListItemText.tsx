import React, { ReactNode } from 'react';

interface IListItemTextProps {
	children?: ReactNode;
}

export const ListItemText = ({ children }: IListItemTextProps) => {
	return (
		<div className="list-item-text">{children}</div>
	)
}
