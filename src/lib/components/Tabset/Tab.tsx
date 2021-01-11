import React, { ReactNode } from 'react';

export interface ITabProps {
	title: ReactNode;
	eventKey: string;
	isActive?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	className?: string;
}

export const Tab = ({ children, className, isActive }: ITabProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`tab-pane fade`);
		if (isActive) {
			cssClasses.push(`show active`);
		}
		if (className) {
			cssClasses.push(className);
		}
		return cssClasses.join(' ');
	};

	return (
		<div className={getCssClasses()}>
			{children}
		</div>
	)
}
