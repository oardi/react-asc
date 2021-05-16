import React, { ReactNode } from 'react';
import styles from './CardBody.module.scss';

interface ICardBodyProps {
	children?: ReactNode;
	className?: string;
}

export const CardBody = ({ children, className = '', ...rest }: ICardBodyProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardBody);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
}
