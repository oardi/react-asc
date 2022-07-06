import React from 'react';
import styles from './ListItemAction.module.scss';

export const ListItemAction = ({ children, onClick, ...rest }: React.ComponentProps<'div'>) => (
	<div
		className={styles.listItemAction}
		onClick={e => onClick && onClick(e)}
		{...rest}
	>
		{children}
	</div>
)
