import React from 'react';
import styles from './CardText.module.scss';

interface ICardTextProps extends React.ComponentProps<"p"> {
}

export const CardText = (props: ICardTextProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardText);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<p className={getCssClasses()} {...rest}>
			{props.children}
		</p>
	);
}
