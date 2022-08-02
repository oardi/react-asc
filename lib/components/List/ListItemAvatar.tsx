import React from 'react';
import styles from './ListItemAvatar.module.scss';

interface IListItemAvatarProps extends React.ComponentProps<'div'> {
	avatar: React.ReactNode;
}

export const ListItemAvatar = ({ avatar, ...rest }: IListItemAvatarProps) => (
	<div className={styles.avatar} {...rest}>
		{avatar}
	</div>
)
