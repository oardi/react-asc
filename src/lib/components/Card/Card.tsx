import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface ICardProps {
	children?: ReactNode;
	className?: string;
	shadow?: boolean;
}

export const Card = (props: ICardProps) => {

	const { children, className = '', shadow = true, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.card);
		shadow && cssClasses.push(styles.shadow);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
}
