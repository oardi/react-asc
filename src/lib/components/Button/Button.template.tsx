import React from 'react';

import { COLOR, VARIANT } from '../component.enums';
import { Icon } from '../Icon';
import { IButtonProps } from './Button';
import styles from './Button.module.scss';

export const ButtonTemplate = (props: IButtonProps) => {
	const { children, variant = VARIANT.contained, color = COLOR.primary, isRounded, isActive, className, startIcon, endIcon, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`btn`);
		cssClasses.push(styles.button);
		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(styles.btnText);
			cssClasses.push(styles[color]);
		}
		if (isRounded && variant !== 'text') {
			cssClasses.push(`rounded-pill`);
		}
		if (isActive) {
			cssClasses.push('active');
		}
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			{...rest}
		>
			<span className="d-flex justify-content-center">
				{startIcon &&
					<Icon className={styles.startIcon}>
						{startIcon}
					</Icon>
				}
				{children}
				{endIcon &&
					<Icon className={styles.endIcon}>
						{endIcon}
					</Icon>
				}
			</span>
		</button>
	);
};
