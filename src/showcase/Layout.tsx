import React, { ReactNode } from 'react';
import { Typography } from '../lib';

interface ILayoutProps {
	children?: ReactNode;
	title?: string;
	className?: string;
}

export const Layout = ({ children, className, title }: ILayoutProps) =>
	<div className={className}>
		{title && <Typography as="h1">{title}</Typography>}
		{children}
	</div>
