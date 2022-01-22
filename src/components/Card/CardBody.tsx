import React from 'react';
import styles from './CardBody.module.scss';

interface ICardBodyProps extends React.ComponentProps<"div"> {
}

export const CardBody = (props: ICardBodyProps) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardBody);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
}
