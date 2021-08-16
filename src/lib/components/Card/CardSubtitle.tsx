import React from 'react';
import styles from './CardSubtitle.module.scss';

interface ICardSubtitleProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const CardSubtitle = (props: ICardSubtitleProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardSubtitle);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<p className={getCssClasses()} {...rest}>
			{children}
		</p>
	);
}
