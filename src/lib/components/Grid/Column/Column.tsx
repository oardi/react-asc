import React, { ReactNode } from 'react';

interface IColProps {
	children?: ReactNode;
	className?: string;

	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export const Column = (props: IColProps) => {

	const {
		children,
		className,
		xs,
		sm,
		md,
		lg,
		xl,
		...rest
	} = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		!xs && !sm && !md && !lg && !xl && cssClasses.push('col');
		if (xs) cssClasses.push(`col-${xs.toString()}`);
		if (sm) cssClasses.push(`col-sm-${sm.toString()}`);
		if (md) cssClasses.push(`col-md-${md.toString()}`);
		if (lg) cssClasses.push(`col-lg-${lg.toString()}`);
		if (xl) cssClasses.push(`col-xl-${xl.toString()}`);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	)
}
