import React from 'react';
import type { Color } from '../../enums';
import { TimesCircleSolidIcon } from '../../icons';
import styles from './Chip.module.scss';

export interface IChipProps extends React.ComponentProps<'div'> {
	color?: Color;
	shadow?: boolean;
	onClick?: (e: React.MouseEvent<Element>) => void;
	isDeletable?: boolean;
	onDelete?: (e: React.MouseEvent<Element>) => void;
	deleteIcon?: JSX.Element;
}

export const Chip = (props: IChipProps): JSX.Element => {
	const {
		children,
		color = 'secondary',
		className,
		shadow,
		onClick,
		isDeletable,
		onDelete,
		deleteIcon = <TimesCircleSolidIcon />,
		style,
		...rest
	} = props;

	const getCssClass = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.chip);
		cssClasses.push(styles[color]);
		shadow && cssClasses.push(styles['shadow']);
		onClick && cssClasses.push(styles['clickable']);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	const handleClickOnDelete = (e: React.MouseEvent<Element>): void => {
		e.stopPropagation();
		onDelete && onDelete(e);
	};

	return (
		<div className={getCssClass()} {...rest} style={style}>
			<span>{children}</span>
			{isDeletable && (
				<div className={styles.deleteIcon} onClick={(e): void => handleClickOnDelete(e)}>
					{deleteIcon}
				</div>
			)}
		</div>
	);
};
