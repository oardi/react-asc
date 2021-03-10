import React, { ReactNode } from 'react';

interface ICardProps {
	children?: ReactNode;
	className?: string;
}

export const Card = (props: ICardProps) => {

	const { children, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(className);
		cssClasses.push('card shadow-sm');
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
}
