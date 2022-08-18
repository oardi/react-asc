import React from 'react';
import styles from './CardText.module.scss';

export const CardText = (props: React.ComponentProps<'p'>): JSX.Element => {

	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.cardText);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<p className={getCssClasses()} {...rest}>
			{children}
		</p>
	);
};
