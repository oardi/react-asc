import React from 'react';
import { Portal } from '../Portal';
import styles from './Backdrop.module.scss';

export interface IBackdropProps extends React.ComponentProps<'div'> {
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
		isTransparent && cssClasses.push(styles['isTransparent']);
		return cssClasses.filter(css => css).join(' ');
	}

	const getStyles = () => {
		return Object.assign({ height: '100%', width: '100%', position: 'absolute' }, style);
	};

	return (
		<Portal className='backdrop-root' target={target}>
			<div className={getCssClasses()} onClick={handleClick} style={getStyles()} {...rest} />
		</Portal>
	)
}
