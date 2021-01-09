import React from 'react';
import { createPortal } from 'react-dom';

interface IBackdropProps {
	onClick?: () => void;
}

export const Backdrop = ({ onClick }: IBackdropProps) => {

	const handleClick = () => {
		onClick && onClick();
	}

	return (
		createPortal(
			<div
				className="modal-backdrop fade show"
				onClick={handleClick} />,
			document.body)
	)
}
