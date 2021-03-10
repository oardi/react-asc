import React from 'react';

export interface ISvgIconProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	// svg: string;
	children: React.ReactNode;
}

export const SvgIcon = (props: ISvgIconProp) => {

	const { children, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`svg-icon`);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div
			className={getCssClasses()}
			{...rest}
		>
			{children}
		</div>
	);
}
