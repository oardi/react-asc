import type { ReactNode } from 'react';
import { Typography } from 'src/lib';

interface ILayoutProps {
	children?: ReactNode;
	title?: string;
	className?: string;
}

export const Layout = ({ children, className, title }: ILayoutProps): React.JSX.Element => (
	<div className={className}>
		{title && <Typography as="h1">{title}</Typography>}
		{children}
	</div>
);
