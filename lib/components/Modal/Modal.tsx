import type { ReactElement, ReactNode } from 'react';
import React, { useEffect } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { Backdrop } from '../Backdrop';
import { ModalFooter } from './ModalFooter';
import type { SIZE } from '../component.enums';
import styles from './Modal.module.scss';
import { Portal } from '../Portal';

export interface IModalProps {
	target?: HTMLElement;
	className?: string;
	children?: ReactNode;
	header?: string | ReactElement;
	footer?: string | ReactElement;
	onHeaderCloseClick?: () => void;
	onBackdropClick?: () => void;
	isDismissable?: boolean;
	fullScreen?: boolean;
	size?: SIZE;
}

export const Modal = (props: IModalProps): JSX.Element => {

	const { target = document.body, className, size, fullScreen, children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;

	const getCssClass = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.modalDialog);
		cssClasses.push(styles.modalDialogCentered);
		size && cssClasses.push(styles[size]);
		fullScreen && cssClasses.push(styles.fullscreen);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	useEffect(() => {
		document.body.classList.add('modal-open');
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, []);

	const handleClickBackdrop = (): void => {
		onBackdropClick && onBackdropClick();
	};

	return (
		<>
			<Portal className='modal-root' target={target}>
				<div className={styles.modal}>
					<div className={getCssClass()}>
						<div className={styles.modalContent}>
							{
								header &&
								<ModalHeader
									isDismissable={isDismissable}
									onClose={(): void => onHeaderCloseClick && onHeaderCloseClick()}>
									{header}
								</ModalHeader>
							}
							<ModalBody>{children}</ModalBody>
							{footer &&
								<ModalFooter>
									{footer}
								</ModalFooter>
							}
						</div>
					</div>
				</div>
			</Portal>
			<Backdrop
				onClick={handleClickBackdrop}
				style={{ zIndex: 1040 }}
			/>
		</>
	);
};
