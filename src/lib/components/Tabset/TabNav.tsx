/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react';

export interface ITabNavProps {
	eventKey: string;
	disabled?: boolean;
	children?: ReactNode;
	isActive?: boolean;
	onClick?: (eventKey: string) => void;
}

export const TabNav = (props: ITabNavProps) => {

	const { eventKey, disabled, children, isActive, onClick } = props;

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
