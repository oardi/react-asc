import React, { ReactNode } from 'react';
import styles from './CardTitle.module.scss';

interface ICardTitleProps {
	children?: ReactNode;
	className?: string;
	as?: any;
}

export const CardTitle = (props: ICardTitleProps) => {

	const { children, className = '', as: As = 'div', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardTitle);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<As className={getCssClasses()} {...rest}>
			{children}
		</As>
	)
}
