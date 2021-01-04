import React, { ReactNode } from 'react';

interface ICardProps {
	children?: ReactNode;
	className?: string;
}

export const Card = (props: ICardProps) => {
	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(props.className);
		cssClasses.push('card shadow-sm');
		return cssClasses.join(' ');
	};

	return (
		<div className={getCssClasses()}>
			{props.children}
		</div>
	);
}
