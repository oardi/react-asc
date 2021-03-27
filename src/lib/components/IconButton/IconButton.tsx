import React from 'react';
import { COLOR, VARIANT } from '../component.enums';
import styles from './IconButton.module.scss';

export interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: React.SVGProps<SVGSVGElement>;
	color?: COLOR;
	isActive?: boolean;
	disabled?: boolean;
	variant?: VARIANT;
}

export const IconButton = (props: IIconButtonProps) => {

	const { children, icon, variant = VARIANT.text, color = COLOR.primary, isActive, disabled, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles[color]);
		cssClasses.push(styles[variant]);
		cssClasses.push(styles.iconButton);

		isActive && cssClasses.push(styles.active);
		disabled && cssClasses.push(styles.disabled);

		cssClasses.push(className);

		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			disabled={disabled}
			{...rest}
		>
			<span
				className="svg-icon">
				{icon}
			</span>
		</button >
	);
};
