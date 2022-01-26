import React from 'react';
import styles from './ModalFooter.module.scss';

export const ModalFooter = ({ children }: React.ComponentProps<'div'>) => (
	<div className={styles.modalFooter}>
		{children}
	</div>
);
