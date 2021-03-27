import React, { ReactNode } from 'react';
import styles from './ListItemAction.module.scss';

interface IListItemActionProps {
	children?: ReactNode;
}

export const ListItemAction = ({ children }: IListItemActionProps) => (
	<div className={styles.listItemAction}>{children}</div>
)
