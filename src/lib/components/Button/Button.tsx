import React, { MouseEvent } from 'react';

import { COLOR, VARIANT } from '../component.enums';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	block?: boolean;
	color?: COLOR;
	isActive?: boolean;
	isRounded?: boolean;
	onClick?: (e: MouseEvent) => void;
	variant?: VARIANT;
}

export const Button = (props: IButtonProps) => {

	const { children, variant = VARIANT.contained, color = COLOR.primary, block, isRounded, isActive, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`btn`);
		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(`btn-link`);
			cssClasses.push(`btn-link-${color}`);
		}
		if (isRounded && variant !== 'text') {
			cssClasses.push(`rounded-pill`);
		}
		if (block) {
			cssClasses.push('btn-block');
		}
		if (isActive) {
			cssClasses.push('active');
		}
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			{...rest}
		>
			{children}
		</button>
	);
};
