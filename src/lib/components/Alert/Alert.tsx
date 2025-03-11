import type { ReactNode } from 'react';
import React from 'react';
import type { SIZE } from '../../enums';
import { Color, VARIANT } from '../../enums';
import styles from './Alert.module.scss';

export interface IAlertProps extends React.ComponentProps<'div'> {
	children?: ReactNode;
	className?: string;
	variant?: VARIANT;
	color?: Color;
	shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}

export const Alert = (props: IAlertProps): React.JSX.Element => {
	const { children, className, color = Color.secondary, variant = VARIANT.contained, shadow = true, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.alert);

		if (variant === VARIANT.contained) {
			cssClasses.push(styles.contained);
			cssClasses.push(styles[color]);
		}
		if (variant === VARIANT.outline) {
			cssClasses.push(styles.outline);
			cssClasses.push(styles[color]);
		}

		shadow && cssClasses.push(styles['shadow']);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
