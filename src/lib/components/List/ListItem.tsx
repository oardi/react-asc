import React, { MouseEvent, ReactNode } from 'react';

export interface IListItemProps {
	children?: ReactNode;
	active?: boolean;
	className?: string;
	isHoverable?: boolean;
	isDisabled?: boolean;
	onClick?: (e: MouseEvent) => void;
}

export const ListItem = (props: IListItemProps) => {

	const { children, active = false, className, isHoverable = true, isDisabled = false, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('list-group-item d-flex justify-content-start align-items-center');
		if (active) {
			cssClasses.push(`active`);
		}
		if (isHoverable) {
			cssClasses.push(`list-group-item-action`);
		}
		if (isDisabled) {
			cssClasses.push(`disabled`);
		}
		if (className) {
			cssClasses.push(className);
		}
		return cssClasses.filter(css => css).join(' ');
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
