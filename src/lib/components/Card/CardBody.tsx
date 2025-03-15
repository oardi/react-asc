import React from 'react';
import styles from './CardBody.module.scss';

export const CardBody = (props: React.ComponentProps<'div'>): React.JSX.Element => {
	const { children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.cardBody);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
