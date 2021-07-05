import React, { ReactNode } from 'react';

export interface ITabProps {
	label: ReactNode;
	value: string;
	isActive?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	className?: string;
}

export const Tab = (props: ITabProps) => {

	const { children, className, isActive } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		if (isActive) {
			cssClasses.push(`show active`);
		}
		if (className) {
			cssClasses.push(className);
		}
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()}>
			{children}
		</div>
	)
}
