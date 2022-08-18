import React from 'react';
import styles from './SkeletonText.module.scss';

export interface ISkeletonTextProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonText = (props: ISkeletonTextProps) => {

	const { className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.skeletonText);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return (
		<div
			className={getCssClasses()}
			{...rest}
		>
		</div>
	);
};
