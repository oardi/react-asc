import React, { ComponentProps, FunctionComponent, HTMLAttributes } from 'react';
import styles from './FormLabel.module.scss';

export interface IFormLabelProps extends ComponentProps<"label"> {
}

export const FormLabel: FunctionComponent<IFormLabelProps & HTMLAttributes<HTMLLabelElement>> = (props) => {

	const { children, className, htmlFor, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.formLabel);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<label htmlFor={htmlFor} className={getCssClasses()} {...rest}>
			{children}
		</label>
	);
}
