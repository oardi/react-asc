import React from 'react';
import { COLOR } from '../component.enums';
import { IconButton } from '../IconButton';
import styles from './SpeedDialAction.module.scss';

export interface ISpeedDialActionProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: React.SVGProps<SVGSVGElement>;
	tooltipTitle?: string;
	onClick?: (e: React.MouseEvent) => void;
}

export const SpeedDialAction = (props: ISpeedDialActionProps) => {

	const { icon, onClick, className } = props;

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
			color={COLOR.light}
			shadow={true}
			onClick={onClick}
		/>
	);
}
