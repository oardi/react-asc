import React, { ReactNode } from 'react';
import styles from './ListItemAction.module.scss';

interface IListItemActionProps {
	children?: ReactNode;
	onClick?: (e: React.MouseEvent) => void;
}

export const ListItemAction = ({ children, onClick }: IListItemActionProps) => (
	<div className={styles.listItemAction} onClick={e => onClick && onClick(e as any)}>{children}</div>
)
