import React from 'react';
import { createPortal } from 'react-dom';

interface IDropDownBackdropProps {
	onClick?: () => void;
}

export const DropDownBackdrop = ({ onClick }: IDropDownBackdropProps) => {

	const handleClick = () => {
		onClick && onClick();
	}

	return (
		createPortal(
			<div className="modal-backdrop fade show" onClick={handleClick} style={{ background: 'transparent' }} />,
			document.body)
	)
}
