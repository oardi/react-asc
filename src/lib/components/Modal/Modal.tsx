import React, { Fragment, ReactElement, ReactNode, useEffect } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { Backdrop } from '../Backdrop';

interface IModalProps {
	children?: ReactNode;
	header?: string;
	footer?: string | ReactElement;
	onHeaderCloseClick?: Function;
	onBackdropClick?: Function;
	isDismissable?: boolean;
}

export const Modal = (props: IModalProps) => {

	const { children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;

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
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
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
