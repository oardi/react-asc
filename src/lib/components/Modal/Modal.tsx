import React, { Fragment, ReactElement, ReactNode, useEffect } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { Backdrop } from '../Backdrop';
import styles from './Modal.module.scss';
import { ModalFooter } from './ModalFooter';
import { SIZE } from '..';

export interface IModalProps {
	className?: string;
	children?: ReactNode;
	header?: string;
	footer?: string | ReactElement;
	onHeaderCloseClick?: Function;
	onBackdropClick?: Function;
	isDismissable?: boolean;
	fullScreen?: boolean;
	size?: SIZE;
}

export const Modal = (props: IModalProps) => {

	const { className, size, fullScreen, children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('modal-dialog modal-dialog-centered');
		cssClasses.push(styles.modal);
		!!fullScreen && cssClasses.push(styles['fullscreen']);
		size && cssClasses.push(styles[size]);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
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
			<div className={"modal show " + styles.modal} style={{ display: 'block' }}>
				<div className={getCssClass()}>
					<div className={'modal-content ' + (!!fullScreen ? styles['modalContent'] : undefined)}>
						{
							header &&
							<ModalHeader isDismissable={isDismissable} onClose={() => onHeaderCloseClick && onHeaderCloseClick()}>
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
			<Backdrop onClick={handleClickBackdrop} />
		</Fragment>
	);
};
