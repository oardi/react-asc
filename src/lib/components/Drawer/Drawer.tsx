import React, { Fragment, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';

export interface IDrawerProps {
	children?: ReactNode;
	position?: 'left' | 'right';
	// closeOnBackdropClick?: boolean;
	onClickBackdrop?: () => void;
}

export const Drawer = (props: IDrawerProps) => {

	const { children, position = 'left', onClickBackdrop } = props;

	useEffect(() => {
		document.body.classList.add('drawer-open');
		return () => {
			document.body.classList.remove('drawer-open');
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
			<div className="drawer" style={getStyles()}>
				{children}
			</div>
			<Backdrop onClick={handleClickBackdrop} />
		</Fragment>,
		document.body
	);
}
