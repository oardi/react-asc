import React, { ReactNode } from 'react';
import styles from './Breadcrumb.module.scss';

export interface IBreadcrumbProps extends React.ComponentProps<'nav'> {
	children?: ReactNode;
}

export const Breadcrumb = (props: IBreadcrumbProps): JSX.Element => {

	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
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
};
