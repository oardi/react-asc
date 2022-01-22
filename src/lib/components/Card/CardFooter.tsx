import React from 'react';
import styles from './CardFooter.module.scss';

interface ICardFooter extends React.ComponentProps<"div"> {
}

export const CardFooter = (props: ICardFooter) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardFooter);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
}
