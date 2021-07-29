import React from 'react';

import { COLOR, VARIANT } from '../component.enums';
import { ButtonTemplate } from './Button.template';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	block?: boolean;
	color?: COLOR;
	isActive?: boolean;
	isRounded?: boolean;
	onClick?: (e: React.MouseEvent) => void;
	variant?: VARIANT;
	startIcon?: React.SVGProps<SVGSVGElement>;
	endIcon?: React.SVGProps<SVGSVGElement>;
}

export const Button = (props: IButtonProps) => {
	return (<ButtonTemplate {...props} />);
};
