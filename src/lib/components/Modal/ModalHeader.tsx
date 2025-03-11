import React from 'react';
import { VARIANT } from '../../enums';
import { TimesSolidIcon } from '../../icons';
import { IconButton } from '../IconButton';
import styles from './ModalHeader.module.scss';

interface IModalHeaderProps extends React.ComponentProps<'div'> {
	onClose?: () => void;
	isDismissable?: boolean;
	shadow?: boolean;
}

export const ModalHeader = (props: IModalHeaderProps): React.JSX.Element => {
	const { children, shadow, className, isDismissable = false, onClose, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.modalHeader);
		shadow && cssClasses.push(styles.shadow);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (): void => {
		onClose && onClose();
	};

	return (
		<div className={getCssClasses()} {...rest}>
			<h5 className={styles.modalTitle}>{children}</h5>
			{isDismissable && <IconButton icon={<TimesSolidIcon />} variant={VARIANT.text} onClick={handleClick} />}
		</div>
	);
};
