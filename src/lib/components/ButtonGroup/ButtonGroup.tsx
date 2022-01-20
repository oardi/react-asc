import React from 'react';
import styles from './ButtonGroup.module.scss';

export interface IButtonGroupProps extends React.ComponentProps<"div"> {
}

export const ButtonGroup = (props: IButtonGroupProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.buttonGroup);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} role="group" {...rest}>
			{children}
		</div>
	);
}
