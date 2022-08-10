import React, { ReactElement } from 'react';
import { Icon } from '../Icon';

export interface ISpeedDialIconProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	openIcon?: ReactElement;
}

export const SpeedDialIcon = (props: ISpeedDialIconProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<Icon className={getCssClasses()} {...rest}>
			{children}
		</Icon>
	);
};
