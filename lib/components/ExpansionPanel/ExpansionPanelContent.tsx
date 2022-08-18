import React, { ReactNode } from 'react';
import styles from './ExpansionPanelContent.module.scss';

export interface IExpansionPanelContentProps {
	children?: ReactNode;
}

export const ExpansionPanelContent = ({ children }: IExpansionPanelContentProps): JSX.Element => {
	return (
		<div className={styles.expansionPanelContent}>
			{children}
		</div>
	);
};
