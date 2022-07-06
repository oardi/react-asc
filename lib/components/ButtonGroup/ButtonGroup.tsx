import React from 'react';
import { ButtonContext } from '../Button/ButtonContext';
import { COLOR } from '../component.enums';
import styles from './ButtonGroup.module.scss';

export interface IButtonGroupProps extends React.ComponentProps<'div'> {
	color?: COLOR;
}

export const ButtonGroup = (props: IButtonGroupProps) => {

	const { children, className, color, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.buttonGroup);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ButtonContext.Provider value={{ color: color || COLOR.primary }}>
			<div className={getCssClasses()} role="group" {...rest}>
				{children}
			</div>
		</ButtonContext.Provider>
	);
}
