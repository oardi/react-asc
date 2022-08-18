import React, { ReactNode } from 'react';
import { VARIANT } from '../component.enums';
import { COLOR, SIZE } from '../component.enums';
import styles from './Alert.module.scss';

export interface IAlertProps extends React.ComponentProps<'div'> {
	children?: ReactNode;
	className?: string;
	variant?: VARIANT;
	color?: COLOR;
	shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}

export const Alert = (props: IAlertProps): JSX.Element => {

	const { children, className, color = COLOR.primary, variant = VARIANT.contained, shadow = true, ...rest } = props;

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
