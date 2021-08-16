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
	style?: any;
}

export const Chip = (props: IChipProps) => {

	const { children, color = 'secondary', className, shadow, onClick, onDelete, deleteIcon = <TimesSolidIcon />, style, ...rest } = props;

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.chip);
		cssClasses.push(styles[color]);
		shadow && cssClasses.push(styles['shadow']);
		onClick && cssClasses.push(styles['clickable']);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	}

	const handleClickOnDelete = (e: React.MouseEvent<Element>) => {
		e.stopPropagation();
		onDelete && onDelete(e);
	}

	return (
		<div className={getCssClass()} {...rest} style={style}>
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
