import React from 'react';
import styles from './CardSubtitle.module.scss';

export const CardSubtitle = (props: React.ComponentProps<'div'>): JSX.Element => {

	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.cardSubtitle);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<p className={getCssClasses()} {...rest}>
			{children}
		</p>
	);
};
