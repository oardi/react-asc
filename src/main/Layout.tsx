import { Typography } from 'lib';
import type { ReactNode } from 'react';

interface ILayoutProps {
	children?: ReactNode;
	title?: string;
	className?: string;
}

export const Layout = ({ children, className, title }: ILayoutProps): JSX.Element => (
	<div className={className}>
		{title && <Typography as="h1">{title}</Typography>}
		{children}
	</div>
);
