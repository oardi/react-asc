import React from 'react';
import { Color, SIZE, VARIANT } from '../../enums';
import { IconButton } from '../IconButton';
import styles from './FloatingActionButton.module.scss';

export interface IFloatingActionButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: React.ReactNode;
	color?: Color;
	size?: SIZE;
	fixed?: boolean;
	isActive?: boolean;
	disabled?: boolean;
	position?: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
	onClick?: (e: React.MouseEvent) => void;
}

export const FloatingActionButton = (props: IFloatingActionButtonProps): JSX.Element => {
	const { className, icon, color = Color.primary, fixed, position = 'rightBottom', size = SIZE.lg, isActive, disabled, onClick } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.fab);
		fixed && cssClasses.push(styles.fixed);
		position && fixed && cssClasses.push(styles[position]);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent): void => {
		e.stopPropagation();
		onClick && onClick(e);
	};

	return (
		<IconButton
			className={getCssClasses()}
			color={color}
			size={size}
			isActive={isActive}
			disabled={disabled}
			icon={icon}
			variant={VARIANT.contained}
			onClick={handleClick}
		/>
	);
};
