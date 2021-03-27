import React from 'react';
import styles from './ListItemIcon.module.scss';

interface IListItemIconProps {
	icon: React.SVGProps<SVGSVGElement>;
}

export const ListItemIcon = ({ icon }: IListItemIconProps) => (
	<div className={styles.icon}>
		{icon}
	</div>
)
