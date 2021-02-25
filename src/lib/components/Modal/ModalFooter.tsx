import React, { ReactNode } from 'react';

interface IModalFooterProps {
	children?: ReactNode;
}

export const ModalFooter = ({ children }: IModalFooterProps) => (
	<div className="modal-body">{children}</div>
);
