import React, { Fragment, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import styles from './Drawer.module.scss';

export interface IDrawerProps {
	children?: ReactNode;
	position?: 'left' | 'right';
	// closeOnBackdropClick?: boolean;
	onClickBackdrop?: () => void;
}

export const Drawer = (props: IDrawerProps) => {

	const { children, position = 'left', onClickBackdrop } = props;

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
			<div className={styles.drawer} style={getStyles()}>
				{children}
			</div>
			<Backdrop onClick={handleClickBackdrop} />
		</Fragment>,
		document.body
	);
}
