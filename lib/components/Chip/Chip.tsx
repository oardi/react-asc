import React from "react";
import { TimesCircleSolidIcon } from '../../icons';
import { COLOR } from '../component.enums';
import styles from './Chip.module.scss';

export interface IChipProps extends React.ComponentProps<"div"> {
	color?: COLOR;
	shadow?: boolean;
	onClick?: (e: React.MouseEvent<Element>) => void;
	isDeletable?: boolean;
	onDelete?: (e: React.MouseEvent<Element>) => void;
	deleteIcon?: any;
}

export const Chip = (props: IChipProps) => {

	const { children, color = 'secondary', className, shadow, onClick, isDeletable, onDelete, deleteIcon = <TimesCircleSolidIcon />, style, ...rest } = props;

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
			{isDeletable && (
				<div className={styles.deleteIcon} onClick={e => handleClickOnDelete(e)}>
					{deleteIcon}
				</div>
			)}
		</div>
	);
}
