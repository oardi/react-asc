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

export const Modal = ({
	children,
	header,
	footer,
	onHeaderCloseClick,
	onBackdropClick,
	isDismissable = false
}: IModalProps) => {

	let clickListener: EventListener;

	const removeClickListener = () => {
		if (clickListener) {
			document.removeEventListener('click', clickListener);
			clickListener = () => { };
		}
	};

	const initClickBackdropListener = () => {
		clickListener = (e: Event) => {
			const modalDialog = document.querySelector('.modal-dialog');
			const clickedOutside = modalDialog && !modalDialog.contains(e.target as Node);
			if (clickedOutside) {
				removeClickListener();
				if (onBackdropClick) {
					onBackdropClick();
				}
			}
		};
		document.addEventListener('click', clickListener);
	};

	useEffect(() => {
		document.body.classList.add('modal-open');
		initClickBackdropListener();
		return () => {
			document.body.classList.remove('modal-open');
			removeClickListener();
		};
	}, []);

	return (
		<>
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
			<Backdrop />
		</>
	);
};
