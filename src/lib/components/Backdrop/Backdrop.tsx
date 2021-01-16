import React from 'react';
import { createPortal } from 'react-dom';

interface IBackdropProps {
	target?: HTMLElement;
	onClick?: () => void;
	isTransparent?: boolean;
}

export const Backdrop = ({ target = document.body, isTransparent = false, onClick }: IBackdropProps) => {

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
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
			<div className={getCssClasses()} onClick={handleClick} />,
			target
		)
	)
}
