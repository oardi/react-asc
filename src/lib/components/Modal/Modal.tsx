import React, { Fragment, ReactElement, ReactNode, useEffect } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { Backdrop } from '../Backdrop';
import styles from './Modal.module.scss';

interface IModalProps {
	className?: string;
	children?: ReactNode;
	header?: string;
	footer?: string | ReactElement;
	onHeaderCloseClick?: Function;
	onBackdropClick?: Function;
	isDismissable?: boolean;
	fullScreen?: boolean;
}

export const Modal = (props: IModalProps) => {

	const { className = '', fullScreen, children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;

	const getCssClass = () => {
		const result = [];
		result.push('modal-dialog modal-dialog-centered');
		result.push(styles.modal);
		console.warn('fullScreen', fullScreen);
		!!fullScreen && result.push(styles['fullscreen']);
		result.push(className);
		return result.filter(r => r).join(' ');
	}

	useEffect(() => {
		document.body.classList.add('modal-open');
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, []);

	const handleClickBackdrop = () => {
		onBackdropClick && onBackdropClick();
	}

	return (
		<Fragment>
			<div className="modal show" style={{ display: 'block' }}>
				<div className={getCssClass()} role="document">
					<div className={"modal-content " + (!!fullScreen && styles['modalContent'])}>
						{
							header &&
							<ModalHeader isDismissable={isDismissable} onClose={() => onHeaderCloseClick && onHeaderCloseClick()}>
								{header}
							</ModalHeader>
						}
						<ModalBody>{children}</ModalBody>
						{footer &&
							<div className="modal-footer">
								{footer}
							</div>
						}
					</div>
				</div>
			</div>
			<Backdrop onClick={handleClickBackdrop} />
		</Fragment>
	);
};
