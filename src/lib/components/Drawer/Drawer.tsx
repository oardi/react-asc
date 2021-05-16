import React, { Fragment, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import styles from './Drawer.module.scss';

export interface IDrawerProps {
	children?: ReactNode;
	position?: 'left' | 'right';
	className?: string;
	// closeOnBackdropClick?: boolean;
	onClickBackdrop?: () => void;
}

export const Drawer = (props: IDrawerProps) => {

	const { children, className = '', position = 'left', onClickBackdrop } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.drawer);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	useEffect(() => {
		document.body.classList.add(styles.drawerOpen);
		return () => {
			document.body.classList.remove(styles.drawerOpen);
		};
	}, []);

	const handleClickBackdrop = () => {
		onClickBackdrop && onClickBackdrop();
	}

	const positionStyles = {
		left: { left: '0px' },
		right: { right: '0px' },
	};

	const getStyles = () => {
		return positionStyles[position];
	}

	return createPortal(
		<Fragment>
			<div className={getCssClasses()} style={getStyles()}>
				{children}
			</div>
			<Backdrop onClick={handleClickBackdrop} />
		</Fragment>,
		document.body
	);
}
