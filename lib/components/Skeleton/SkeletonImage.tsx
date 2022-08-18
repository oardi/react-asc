import React from 'react';
import styles from './SkeletonImage.module.scss';

export interface ISkeletonImageProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonImage = (props: ISkeletonImageProps): JSX.Element => {

	const { className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
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
