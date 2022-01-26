import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Backdrop.module.scss';

interface IBackdropProps extends React.ComponentProps<"div"> {
	target?: HTMLElement;
	isTransparent?: boolean;
}

export const Backdrop = (props: IBackdropProps) => {

	const { target = document.body, isTransparent = false, onClick, style, ...rest } = props;

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		onClick && onClick(e);
	}

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.backdrop);
		isTransparent && cssClasses.push(`bg-transparent`);
		return cssClasses.filter(css => css).join(' ');
	}

	const getStyles = () => {
		const styles = Object.assign({ height: '100%', width: '100%', position: 'absolute' }, style);
		return styles;
	};

	return (
		createPortal(
			<div className={getCssClasses()} onClick={handleClick} style={getStyles()} {...rest} />,
			target
		)
	)
}
