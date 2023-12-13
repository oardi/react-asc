import React from 'react';
import { Color } from '../../enums';
import { ButtonContext } from '../Button/ButtonContext';
import styles from './ButtonGroup.module.scss';

export interface IButtonGroupProps extends React.ComponentProps<'div'> {
	color?: Color;
}

export const ButtonGroup = (props: IButtonGroupProps): JSX.Element => {
	const { children, className, color, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.buttonGroup);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ButtonContext.Provider value={{ color: color || Color.primary }}>
			<div className={getCssClasses()} role="group" {...rest}>
				{children}
			</div>
		</ButtonContext.Provider>
	);
};
