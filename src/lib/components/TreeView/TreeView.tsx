import React from 'react';
import styles from './TreeView.module.scss';

export const TreeView = (props: React.ComponentProps<'ul'>): React.JSX.Element => {
	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.treeView);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ul className={getCssClasses()} {...rest}>
			{children}
		</ul>
	);
};
