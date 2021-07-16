import React from 'react';

export interface IButtonGroupProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const ButtonGroup = (props: IButtonGroupProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('btn-group');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} role="group" {...rest}>
			{children}
		</div>
	);
}
