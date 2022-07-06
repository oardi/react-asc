import React from 'react';
import { Icon } from '../Icon';
import { COLOR, VARIANT } from '../component.enums';
import styles from './Button.module.scss';

export interface IButtonProps extends React.ComponentProps<'button'> {
	color?: COLOR;
	isActive?: boolean;
	isRounded?: boolean;
	variant?: VARIANT;
	startIcon?: React.SVGProps<SVGSVGElement>;
	endIcon?: React.SVGProps<SVGSVGElement>;
	shadow?: boolean;
	block?: boolean;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {

	const { children, variant = VARIANT.contained, color = COLOR.primary, isRounded, isActive, className, startIcon, endIcon, shadow = true, block, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.button);

		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(styles.btnContained);
			cssClasses.push(styles[color]);
		}
		if (variant === 'outline') {
			cssClasses.push(styles.btnOutline);
			cssClasses.push(styles[color]);
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
		shadow && cssClasses.push(styles.shadow);
		block && cssClasses.push(styles.block);
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
