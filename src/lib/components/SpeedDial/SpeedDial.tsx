import React from 'react';
import { PlusSolidIcon } from '../../icons';
import { FloatingActionButton } from '../FloatingActionButton';
import styles from './SpeedDial.module.scss';
import { SpeedDialActions } from './SpeedDialActions';

export interface ISpeedDialProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onClose?: (e: React.MouseEvent) => void;
	onOpen?: (e: React.MouseEvent) => void;
	open?: boolean;
}

export const SpeedDial = (props: ISpeedDialProps): React.JSX.Element => {
	const { children, className, open, onOpen, onClose, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.speedDial);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent): void => {
		if (open) {
			onClose && onClose(e);
		} else {
			onOpen && onOpen(e);
		}
	};

	return (
		<div className={getCssClasses()} {...rest}>
			<div style={{ transform: open ? 'rotate(45deg)' : undefined }}>
				<FloatingActionButton icon={<PlusSolidIcon />} onClick={handleClick} />
			</div>

			{open && <SpeedDialActions>{children}</SpeedDialActions>}
		</div>
	);
};
