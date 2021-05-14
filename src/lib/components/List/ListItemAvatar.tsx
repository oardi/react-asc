import React from 'react';
import styles from './ListItemAvatar.module.scss';

interface IListItemAvatarProps {
	avatar: React.SVGProps<SVGSVGElement> | React.ImgHTMLAttributes<HTMLImageElement>;
}

export const ListItemAvatar = ({ avatar }: IListItemAvatarProps) => (
	<div className={styles.avatar}>
		{avatar}
	</div>
)
