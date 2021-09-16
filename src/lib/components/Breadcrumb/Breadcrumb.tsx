import React, { ReactNode } from 'react';
import styles from './Breadcrumb.module.scss';

export interface IBreadcrumbProps {
	className?: string;
	children?: ReactNode;
}

export const Breadcrumb = (props: IBreadcrumbProps) => {

	const { children, className } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.breadcrumb);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<nav>
			<ol className={getCssClasses()}>
				{children}
			</ol>
		</nav>
	);
}
