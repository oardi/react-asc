import React from 'react';
import styles from './ListItemIcon.module.scss';

interface IListItemIconProps extends React.ComponentProps<'div'> {
	icon: React.SVGProps<SVGSVGElement>;
}

export const ListItemIcon = ({ icon, ...rest }: IListItemIconProps) => (
	<div className={styles.icon} {...rest}>
		{icon}
	</div>
)
