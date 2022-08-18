import React from 'react';
import styles from './TreeView.module.scss';

export const TreeView = (props: React.ComponentProps<'ul'>) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
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
