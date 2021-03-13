import React, { ReactNode } from 'react';

interface IColProps {
	children?: ReactNode;
	className?: string;

	xs?: string; // 1/5 oder 2/3
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
}

export const Column = (props: IColProps) => {

	const {
		children,
		className = '',
		xs,
		sm,
		md,
		lg,
		xl,
		...rest
	} = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(className);
		!xs && !sm && !md && !lg && !xl && cssClasses.push('col');
		xs && cssClasses.push(`col-${xs}`);
		sm && cssClasses.push(`col-sm-${sm}`);
		md && cssClasses.push(`col-md-${md}`);
		lg && cssClasses.push(`col-lg-${lg}`);
		xl && cssClasses.push(`col-xl-${xl}`);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	)
}
