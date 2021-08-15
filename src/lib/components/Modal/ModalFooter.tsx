import React, { ReactNode } from 'react';
import styles from './ModalFooter.module.scss';

interface IModalFooterProps {
	children?: ReactNode;
}

export const ModalFooter = ({ children }: IModalFooterProps) => (
	<div className={"modal-footer " + styles.modalFooter}>{children}</div>
);
