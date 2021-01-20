import React, { ReactNode, MouseEvent } from 'react';

import { COLOR, VARIANT } from '../component.enums';

export interface IButtonProps {
	block?: boolean;
	children?: ReactNode;
	className?: string;
	color?: COLOR;
	disabled?: boolean;
	isActive?: boolean;
	isRounded?: boolean;
	onClick?: (e: MouseEvent) => void;
	variant?: VARIANT;
	autofocus?: boolean;

	onMouseOver?: (e: MouseEvent) => void;
	onMouseLeave?: (e: MouseEvent) => void;
}

export const Button = ({
	children,
	block = false,
	color = COLOR.primary,
	disabled = false,
	isActive = false,
	isRounded = false,
	onClick,
	variant = VARIANT.normal,
	className,
	autofocus: autoFocus,
	onMouseOver,
	onMouseLeave
}: IButtonProps) => {

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
		if (className) {
			cssClasses.push(className);
		}
		return cssClasses.join(' ');
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			disabled={disabled}
			autoFocus={autoFocus}

			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</button>
	);
};
