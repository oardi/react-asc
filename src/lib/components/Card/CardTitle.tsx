import React, { ReactNode } from 'react';

interface ICardTitleProps {
	children?: ReactNode;
	className?: string;
	as?: any;
}

export const CardTitle = (props: ICardTitleProps) => {

	const { children, className, as: As = 'div', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(className);
		cssClasses.push('card-title');
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<As className={getCssClasses()} {...rest}>
			{children}
		</As>
	)
}
