import React, { ReactNode } from 'react';
import styles from './Breadcrumb.module.scss';

export interface IBreadcrumbProps extends React.ComponentProps<"nav"> {
	children?: ReactNode;
}

export const Breadcrumb = (props: IBreadcrumbProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.breadcrumb);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<nav {...rest}>
			<ol className={getCssClasses()}>
				{children}
			</ol>
		</nav>
	);
}
