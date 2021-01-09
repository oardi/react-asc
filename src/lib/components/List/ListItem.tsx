import React, { MouseEvent, ReactNode } from 'react';

interface IListItemProps {
	children?: ReactNode;
	active?: boolean;
	className?: string;
	isHoverable?: boolean;
	isDisabled?: boolean;
	onClick?: (e: MouseEvent) => void;
}

export const ListItem = ({
	children,
	active = false,
	className,
	isHoverable = true,
	isDisabled = false,
	onClick
}: IListItemProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('list-group-item d-flex align-items-center');
		if (active) {
			cssClasses.push(`active`);
		}
		if (isHoverable) {
			cssClasses.push(`list-group-item-actions`);
		}
		if (isDisabled) {
			cssClasses.push(`disabled`);
		}
		if (className) {
			cssClasses.push(className);
		}
		return cssClasses.join(' ');
	}

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		onClick && onClick(e);
	};

	return (
		<li onClick={handleClick} className={getCssClasses()}>
			{children}
		</li>
	);
}
