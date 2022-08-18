import React from 'react';
import styles from './ListItemAction.module.scss';

export const ListItemAction = ({ children, onClick, ...rest }: React.ComponentProps<'div'>): JSX.Element => (
	<div
		className={styles.listItemAction}
		onClick={(e): void => onClick && onClick(e)}
		{...rest}
	>
		{children}
	</div>
);
