import React from 'react';
import styles from './CardFooter.module.scss';

export const CardFooter = (props: React.ComponentProps<'div'>): JSX.Element => {

	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.cardFooter);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
