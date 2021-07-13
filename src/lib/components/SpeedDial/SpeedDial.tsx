import React, { useState } from 'react';
import { PlusSolidIcon } from '../../assets/icons';
import { FloatingActionButton } from '../FloatingActionButton';
import styles from './SpeedDial.module.scss';

export interface ISpeedDialProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onClose?: (e: React.MouseEvent) => void;
	onOpen?: (e: React.MouseEvent) => void;
	open?: (e: React.MouseEvent) => void;
}

export const SpeedDial = (props: ISpeedDialProps) => {

	const { children, className, open, ...rest } = props;

	const [isOpen, setIsOpen] = useState<boolean>(!!open);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.speedDial);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = () => {
		console.warn('handleClick');
		setIsOpen(!isOpen);
	};

	// TODO
	// change icon on state change
	return (
		<div className={getCssClasses()} {...rest}>
			<FloatingActionButton
				icon={<PlusSolidIcon />}
				onClick={handleClick}
			/>

			{isOpen &&
				<SpeedDialActions>
					{children}
				</SpeedDialActions>
			}
		</div>
	);
}


interface ISpeedDialActionsProps {
	children: any;
}

const SpeedDialActions = (props: ISpeedDialActionsProps) => {

	const { children } = props;

	return (
		<div className="actions">
			{children}
		</div>
	);
}
