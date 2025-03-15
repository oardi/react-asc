import React from 'react';
import styles from './ListItemAvatar.module.scss';

interface IListItemAvatarProps extends React.ComponentProps<'div'> {
	avatar: React.ReactNode;
	avatarSize?: ListItemAvatarSize;
}

export enum ListItemAvatarSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}

export const ListItemAvatar = ({ avatar, avatarSize = ListItemAvatarSize.sm, ...rest }: IListItemAvatarProps): React.JSX.Element => {
	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.avatar);
		cssClasses.push(styles[avatarSize]);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{avatar}
		</div>
	);
};
