import React, { ReactNode } from 'react';

interface IListProps {
	children?: ReactNode;
	isFlush?: boolean;
}

export const List = ({ children, isFlush = false }: IListProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('list list-group');
		if (isFlush) {
			cssClasses.push(`list-group-flush`);
		}
		return cssClasses.join(' ');
	}

	return (
		<ul className={getCssClasses()}>
			{children}
		</ul>
	);
}
