import React from 'react';
import styles from './SkeletonAvatar.module.scss';

export interface ISkeletonAvatarProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonAvatar = (props: ISkeletonAvatarProps) => {

	const { className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.skeletonAvatar);
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
