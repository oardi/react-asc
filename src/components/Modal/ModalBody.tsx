import React, { ReactNode } from 'react';

interface IModalBodyProps {
	children?: ReactNode;
}

export const ModalBody = ({ children }: IModalBodyProps) => (
	<div className="modal-body">{children}</div>
);
