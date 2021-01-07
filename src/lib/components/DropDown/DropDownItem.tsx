import React, { ReactNode } from 'react';

export interface IDropDownItemProps {
	key?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent) => void;
}

export const DropDownItem = ({ children, onClick }: IDropDownItemProps) => {

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick && onClick(e);
	}

	return (
		<a className="dropdown-item" onClick={handleClick}>
			{children}
		</a>
	)
}
