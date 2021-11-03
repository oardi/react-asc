import React from 'react';
import { createPortal } from 'react-dom';

interface IBackdropProps {
	target?: HTMLElement;
	onClick?: () => void;
	isTransparent?: boolean;
	style?: any;
}

export const Backdrop = (props: IBackdropProps) => {

	const { target = document.body, isTransparent = false, onClick, style } = props;

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
		return cssClasses.filter(css => css).join(' ');
	}

	const getStyles = () => {
		const styles = Object.assign({ height: '100%', width: '100%', position: 'absolute' }, style);
		return styles;
	};

	return (
		createPortal(
			<div className={getCssClasses()} onClick={handleClick} style={getStyles()} />,
			target
		)
	)
}
