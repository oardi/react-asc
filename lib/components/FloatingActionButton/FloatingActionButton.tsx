import React from 'react';
import { COLOR, SIZE, VARIANT } from '../component.enums';
import { IconButton } from '../IconButton';
import styles from './FloatingActionButton.module.scss';

export interface IFloatingActionButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: React.ReactNode;
	color?: COLOR;
	size?: SIZE;
	fixed?: boolean;
	isActive?: boolean;
	disabled?: boolean;
	position?: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
	onClick?: (e: React.MouseEvent) => void;
}

export const FloatingActionButton = (props: IFloatingActionButtonProps) => {

	const { className, icon, color = COLOR.primary, fixed, position = 'rightBottom', size = SIZE.lg, isActive, disabled, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.fab);
		fixed && cssClasses.push(styles.fixed);
		position && fixed && cssClasses.push(styles[position]);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick && onClick(e);
	}

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
