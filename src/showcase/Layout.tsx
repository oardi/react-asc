import React, { ReactNode } from 'react';

interface ILayoutProps {
	children?: ReactNode;
	title: string;
	className?: string;
}

export const Layout = ({ children, className, title }: ILayoutProps) =>
	<div className={className}>
		<h1>{title}</h1>
		{children}
	</div>
