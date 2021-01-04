import React, { MouseEvent } from 'react';
import { COLOR, VARIANT } from '../component.enums';

export interface IIconButtonProps {
	icon?: string;
	color?: COLOR;
	disabled?: boolean;
	onClick?: (e: MouseEvent) => void;
	variant?: VARIANT;
	className?: string;
}

export const IconButton = ({
	icon,
	color = COLOR.primary,
	disabled = false,
	onClick,
	variant = VARIANT.normal,
	className
}: IIconButtonProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`btn`);
		cssClasses.push(`btn-icon`);

		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-icon-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(`btn-link`);
			cssClasses.push(`btn-link-${color}`);
		}
		// if (isFloating) {
		// 	cssClasses.push(`floating`);
		// 	cssClasses.push(`${position}`);
		// }

		cssClasses.push(className);
		return cssClasses.join(' ');
	};

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		onClick ? onClick(e) : undefined;
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			disabled={disabled}
			onClick={(e) => handleClick(e)}
		>
			<span
				className="svg-icon"
				dangerouslySetInnerHTML={{ __html: icon }}>
			</span>
		</button>
	);
};
