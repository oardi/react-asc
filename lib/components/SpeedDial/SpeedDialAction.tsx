import React from 'react';
import { VARIANT } from '../component.enums';
import { COLOR } from '../component.enums';
import { IconButton } from '../IconButton';
import styles from './SpeedDialAction.module.scss';

export interface ISpeedDialActionProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: React.ReactNode;
	tooltipTitle?: string;
	color?: COLOR;
	onClick?: (e: React.MouseEvent) => void;
}

export const SpeedDialAction = (props: ISpeedDialActionProps) => {

	const { icon, color = COLOR.light, onClick, className } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.speedDialAction);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<IconButton
			className={getCssClasses()}
			icon={icon}
			color={color}
			variant={VARIANT.contained}
			shadow={true}
			onClick={onClick}
		/>
	);
}
