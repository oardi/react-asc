import React from 'react';
import styles from './ListItemIcon.module.scss';

interface IListItemIconProps extends React.ComponentProps<'div'> {
	icon: React.ReactNode;
}

export const ListItemIcon = ({ icon, ...rest }: IListItemIconProps): React.JSX.Element => (
	<div className={styles.icon} {...rest}>
		{icon}
	</div>
);
