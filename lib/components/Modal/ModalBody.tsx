import type { ReactNode } from 'react';
import React from 'react';
import styles from './ModalBody.module.scss';

interface IModalBodyProps {
	children?: ReactNode;
}

export const ModalBody = ({ children }: IModalBodyProps): JSX.Element => (
	<div className={styles.modalBody}>{children}</div>
);
