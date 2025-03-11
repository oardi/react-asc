import type { ReactNode } from 'react';
import styles from './ExpansionPanelContent.module.scss';

export interface IExpansionPanelContentProps {
	children?: ReactNode;
}

export const ExpansionPanelContent = ({ children }: IExpansionPanelContentProps): React.JSX.Element => {
	return <div className={styles.expansionPanelContent}>{children}</div>;
};
