import React from 'react';
import { createPortal } from 'react-dom';

interface IBackdropProps {
	onClick?: () => void;
	isTransparent?: boolean;
}

export const Backdrop = ({ isTransparent = false, onClick }: IBackdropProps) => {

	const handleClick = () => {
		onClick && onClick();
	}

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`modal-backdrop fade show`);
		if (isTransparent) {
			cssClasses.push(`bg-transparent`);
		}
		return cssClasses.join(' ');
	}

	return (
		createPortal(
			<div
				className={getCssClasses()}
				onClick={handleClick} />,
			document.body)
	)
}
