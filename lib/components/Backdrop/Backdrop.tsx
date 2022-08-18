import React from 'react';
import { Portal } from '../Portal';
import styles from './Backdrop.module.scss';

export interface IBackdropProps extends React.ComponentProps<'div'> {
	target?: HTMLElement;
	isTransparent?: boolean;
}

export const Backdrop = (props: IBackdropProps): JSX.Element => {

	const { target = document.body, isTransparent = false, onClick, style, ...rest } = props;

	const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
		e.stopPropagation();
		onClick && onClick(e);
	};

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.backdrop);
		isTransparent && cssClasses.push(styles['isTransparent']);
		return cssClasses.filter(css => css).join(' ');
	};

	const getStyles = (): {
		height: string;
		width: string;
		position: string;
	} & React.CSSProperties => {
		return Object.assign({ height: '100%', width: '100%', position: 'absolute' }, style);
	};

	return (
		<Portal className='backdrop-root' target={target}>
			<div className={getCssClasses()} onClick={handleClick} style={getStyles()} {...rest} />
		</Portal>
	);
};
