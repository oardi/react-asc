import React from 'react';
import { createPortal } from 'react-dom';

interface IMenuBackdropProps {
	onClick?: () => void;
}

export const MenuBackdrop = ({ onClick }: IMenuBackdropProps) => {

	const handleClick = () => {
		onClick && onClick();
	}

	return (
		createPortal(
			<div className="modal-backdrop fade show" onClick={handleClick} style={{ background: 'transparent' }} />,
			document.body)
	)
}
