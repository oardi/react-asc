import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';

export interface IDrawerProps {
	children?: ReactNode;
	position?: 'left' | 'right';
	// closeOnBackdropClick?: boolean;
	onClickBackdrop?: () => void;
}

export const Drawer = ({ children, position = 'left', onClickBackdrop }: IDrawerProps) => {

	useEffect(() => {
		document.body.classList.add('modal-open');
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, []);

	const handleClickBackdrop = () => {
		onClickBackdrop && onClickBackdrop();
	}

	const positions = {
		left: { left: '0' },
		right: { right: '0' },
	};

	const getStyles = () => {
		return positions[position];
	}

	return createPortal(
		<>
			<div className="drawer" style={getStyles()}>
				{children}
			</div>
			<Backdrop onClick={handleClickBackdrop} />
		</>,
		document.body
	);
}
