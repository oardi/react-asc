import React from 'react';
import { IconButton } from '../IconButton';
import { VARIANT } from '../component.enums';
import { TimesSolidIcon } from '../../icons';
import styles from './ModalHeader.module.scss';

interface IModalHeaderProps extends React.ComponentProps<'div'> {
	onClose?: () => void;
	isDismissable?: boolean;
}

export const ModalHeader = (props: IModalHeaderProps): JSX.Element => {

	const { children, isDismissable = false, onClose, ...rest } = props;

	const handleClick = (): void => {
		onClose && onClose();
	};

	return (
		<div className={styles.modalHeader} {...rest}>
			<h5 className={styles.modalTitle}>
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
