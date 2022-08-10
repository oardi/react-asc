import React from 'react';
import styles from './CardText.module.scss';

export const CardText = (props: React.ComponentProps<'p'>) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
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
