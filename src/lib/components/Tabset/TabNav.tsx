import React, { ReactNode } from 'react';

export interface ITabNavProps {
	eventKey: string;
	disabled?: boolean;
	children?: ReactNode;
	isActive?: boolean;
	onClick?: (eventKey: string) => void;
}

export const TabNav = ({ eventKey, disabled, children, isActive, onClick }: ITabNavProps) => {
	return (
		<li key={eventKey} className={"nav-item" + (disabled ? ' disabled' : '')}>
			<a
				className={"nav-link" + (isActive ? ' active' : '') + (disabled ? ' disabled' : '')}
				onClick={() => !disabled && onClick && onClick(eventKey)}>
				{children}
			</a>
		</li>
	);
}
