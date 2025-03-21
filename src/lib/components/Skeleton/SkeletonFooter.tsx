import React from 'react';
import styles from './SkeletonFooter.module.scss';

export interface ISkeletonFooterProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonFooter = (props: ISkeletonFooterProps): React.JSX.Element => {
	const { className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.skeletonFooter);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return <div className={getCssClasses()} {...rest}></div>;
};
