import type { ComponentProps } from 'react';
import React from 'react';
import type { Color } from '../../enums';
import styles from './Icon.module.scss';

export interface IIconProps extends ComponentProps<'div'> {
	iconColor?: Color;
	children?: React.ReactNode;
}

export const Icon = (props: IIconProps): React.JSX.Element => {
	const { children, iconColor, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.icon);
		iconColor && cssClasses.push(styles[iconColor]);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
