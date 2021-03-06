import React from 'react';
import { COLOR, VARIANT } from '../component.enums';

export interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: React.SVGProps<SVGSVGElement>;
	color?: COLOR;
	isActive?: boolean;
	variant?: VARIANT;
}

export const IconButton = (props: IIconButtonProps) => {

	const { children, icon, variant = VARIANT.text, color = COLOR.primary, isActive, className, ...rest } = props;

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
			<span
				className="svg-icon">
				{icon}
			</span>
		</button >
	);
};
