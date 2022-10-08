import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { Backdrop } from '../Backdrop';
import { ModalFooter } from './ModalFooter';
import type { SIZE } from '../component.enums';
import styles from './Modal.module.scss';
import { Portal } from '../Portal';
import { useMobileDetect } from 'lib/hooks';

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

	const { isMobile } = useMobileDetect();
	const [isFullScreen, setIsFullScreen] = useState<boolean>(fullScreen as boolean);

	useEffect(() => {
		if (isMobile === true && (fullScreen === true || fullScreen === undefined)) {
			setIsFullScreen(true);
		} else {
			setIsFullScreen(false);
		}
	}, [isMobile, fullScreen]);

	const getCssClass = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.modalDialog);
		cssClasses.push(styles.modalDialogCentered);
		isFullScreen && cssClasses.push(styles.fullscreen);
		size && cssClasses.push(styles[size]);
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
									shadow={fullScreen}
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
