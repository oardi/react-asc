import React from "react";
import styles from './TreeView.module.scss';

export interface ITreeViewProps {
	children?: any;
	className?: string;
}

export const TreeView = (props: ITreeViewProps) => {

	const { children, className } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.treeView);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ul className={getCssClasses()}>
			{children}
		</ul>
	);
}
