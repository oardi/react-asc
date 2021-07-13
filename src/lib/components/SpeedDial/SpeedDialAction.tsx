import React from 'react';
import { COLOR } from '../component.enums';
import { IconButton } from '../IconButton';

export interface ISpeedDialActionProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: React.SVGProps<SVGSVGElement>;
	tooltipTitle?: string;
}

export const SpeedDialAction = (props: ISpeedDialActionProps) => {

	const { icon, className } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<IconButton
			className={getCssClasses()}
			icon={icon}
			color={COLOR.light}
			shadow={true}
		/>
	);
}
