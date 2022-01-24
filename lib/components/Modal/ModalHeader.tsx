import React from 'react';
import { IconButton } from '../IconButton';
import { VARIANT } from '../component.enums';
import { TimesSolidIcon } from '../../icons';
import styles from './ModalHeader.module.scss';

interface IModalHeaderProps extends React.ComponentProps<'div'> {
	onClose?: () => void;
	isDismissable?: boolean;
}

export const ModalHeader = (props: IModalHeaderProps) => {

	const { children, isDismissable = false, onClose, ...rest } = props;

	const handleClick = () => {
		onClose && onClose();
	};

	return (
		<div className={"modal-header " + styles.modalHeader} {...rest}>
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
