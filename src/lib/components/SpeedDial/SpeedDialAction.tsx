import React from 'react';
import { Color, VARIANT } from '../../enums';
import { IconButton } from '../IconButton';
import styles from './SpeedDialAction.module.scss';

export interface ISpeedDialActionProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: React.ReactNode;
	tooltipTitle?: string;
	color?: Color;
	onClick?: (e: React.MouseEvent) => void;
}

export const SpeedDialAction = (props: ISpeedDialActionProps): React.JSX.Element => {
	const { icon, color = Color.light, onClick, className } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.speedDialAction);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return <IconButton className={getCssClasses()} icon={icon} color={color} variant={VARIANT.contained} shadow={true} onClick={onClick} />;
};
