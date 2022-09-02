import type { ReactElement } from 'react';
import React from 'react';
import { Icon } from '../Icon';

export interface ISpeedDialIconProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	openIcon?: ReactElement;
}

export const SpeedDialIcon = (props: ISpeedDialIconProps): JSX.Element => {

	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<Icon className={getCssClasses()} {...rest}>
			{children}
		</Icon>
	);
};
