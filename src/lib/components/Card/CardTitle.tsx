import React from 'react';
import styles from './CardTitle.module.scss';

interface ICardTitleProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	as?: any;
}

export const CardTitle = (props: ICardTitleProps) => {

	const { children, className = '', as: As = 'div', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardTitle);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<As className={getCssClasses()} {...rest}>
			{children}
		</As>
	)
}
