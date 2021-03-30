import React, { ReactNode } from "react";
import { TimesSolidIcon } from '../../assets/icons';
import { COLOR } from '../component.enums';
import styles from './Chip.module.scss';

export interface IChipProps {
	color?: COLOR;
	children?: ReactNode;
	className?: string;
	shadow?: boolean;
	onClick?: (e: React.MouseEvent<Element>) => void;
	onDelete?: (e: React.MouseEvent<Element>) => void;
	deleteIcon?: any;
}

export const Chip = (props: IChipProps) => {

	const { children, color = 'secondary', className, shadow, onClick, onDelete, deleteIcon = <TimesSolidIcon />, ...rest } = props;

	const getCssClass = () => {
		const result = [];
		result.push(styles.chip);
		result.push(styles[color]);
		shadow && result.push(styles['shadow']);
		onClick && result.push(styles['clickable']);
		result.push(className);
		return result.filter(r => r).join(' ');
	}

	const handleClickOnDelete = (e: React.MouseEvent<Element>) => {
		console.warn('handle on delete');
		e.stopPropagation();
		onDelete && onDelete(e);
	}

	return (
		<div className={getCssClass()} {...rest}>
			<div>
				{children}
			</div>
			{onDelete && (
				<div className={styles.deleteIcon} onClick={e => handleClickOnDelete(e)}>
					{deleteIcon}
				</div>
			)}
		</div>
	);
}
