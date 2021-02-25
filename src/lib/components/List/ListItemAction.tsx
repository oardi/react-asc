import React, { ReactNode } from 'react';

interface IListItemActionProps {
	children?: ReactNode;
}

export const ListItemAction = ({ children }: IListItemActionProps) => (
	<div className="list-item-action">{children}</div>
)
