import React from 'react';
import styles from './FormLabel.module.scss';

export const FormLabel = ({ children, className, htmlFor, ...rest }: React.ComponentProps<'label'>) => {

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.formLabel);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<label htmlFor={htmlFor} className={getCssClasses()} {...rest}>
			{children}
		</label>
	);
};
