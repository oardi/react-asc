import React from 'react';
import styles from './SkeletonImage.module.scss';

export interface ISkeletonImageProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonImage = (props: ISkeletonImageProps) => {

	const { className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.skeletonImage);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return (
		<div
			className={getCssClasses()}
			{...rest}
		>
			<div className={styles.img} />
		</div>
	);
};
