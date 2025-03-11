import React from 'react';
import styles from './SkeletonAvatar.module.scss';

export interface ISkeletonAvatarProps extends React.ComponentProps<'div'> {
	indeterminate?: boolean;
}

export const SkeletonAvatar = (props: ISkeletonAvatarProps): React.JSX.Element => {
	const { className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.skeletonAvatar);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return <div className={getCssClasses()} {...rest}></div>;
};
