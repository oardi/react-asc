import React from 'react';
import styles from './SkeletonText.module.scss';

export interface ISkeletonTextProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonText = (props: ISkeletonTextProps): JSX.Element => {

	const { className, ...rest } = props;

	const getCssClasses = (): string => {
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
