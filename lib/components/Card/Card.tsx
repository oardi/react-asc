import React from 'react';
import styles from './Card.module.scss';

interface ICardProps extends React.ComponentProps<'div'> {
	shadow?: boolean;
}

export const Card = (props: ICardProps) => {

	const { children, className, shadow = true, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.card);
		shadow && cssClasses.push(styles.shadow);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
