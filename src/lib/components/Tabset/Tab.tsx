import React, { ReactNode } from 'react';

export interface ITabProps {
	title: ReactNode;
	eventKey: string;
	isActive?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	className?: string;
}

export const Tab = (props: ITabProps) => {

	const { children, className, isActive } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`tab-pane fade`);
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
