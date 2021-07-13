import React from 'react';
import { COLOR, SIZE, VARIANT } from '../component.enums';
import { Icon } from '../Icon';
import styles from './IconButton.module.scss';

export interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: React.SVGProps<SVGSVGElement>;
	color?: COLOR;
	size?: SIZE;
	isActive?: boolean;
	disabled?: boolean;
	variant?: VARIANT;
	shadow?: boolean;
}

export const IconButton = (props: IIconButtonProps) => {

	const { children, icon, variant = VARIANT.text, color = COLOR.primary, size = SIZE.md, isActive, disabled, className = '', shadow, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles[color]);
		cssClasses.push(styles[variant]);
		cssClasses.push(styles[size]);
		cssClasses.push(styles.iconButton);

		isActive && cssClasses.push(styles.active);
		disabled && cssClasses.push(styles.disabled);
		shadow && cssClasses.push(styles.shadow);

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
			<Icon>{icon}</Icon>
		</button >
	);
};
