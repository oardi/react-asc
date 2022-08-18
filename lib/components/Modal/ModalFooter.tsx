import React from 'react';
import styles from './ModalFooter.module.scss';

export const ModalFooter = ({ children }: React.ComponentProps<'div'>): JSX.Element => (
	<div className={styles.modalFooter}>
		{children}
	</div>
);
