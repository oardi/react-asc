import React, { ReactNode } from 'react';
import { IconButton, VARIANT } from '..';
import { TimesSolidIcon } from '../..';
import styles from './ModalHeader.module.scss';
interface IModalHeaderProps {
	children?: ReactNode;
	onClose?: Function;
	isDismissable?: boolean;
}

export const ModalHeader = (props: IModalHeaderProps) => {

	const { children, isDismissable = false, onClose } = props;

	const handleClick = () => {
		onClose && onClose();
	};

	return (
		<div className={"modal-header " + styles.modalHeader}>
			<h5 className="modal-title">
				{children}
			</h5>
			{
				isDismissable &&
				<IconButton
					icon={<TimesSolidIcon />}
					variant={VARIANT.text}
					onClick={handleClick}
				/>
			}
		</div>
	);
};
