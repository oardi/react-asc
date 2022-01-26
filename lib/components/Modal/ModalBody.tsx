import React, { ReactNode } from 'react';
import styles from './ModalBody.module.scss';

interface IModalBodyProps {
	children?: ReactNode;
}

export const ModalBody = ({ children }: IModalBodyProps) => (
	<div className={styles.modalBody}>{children}</div>
);
