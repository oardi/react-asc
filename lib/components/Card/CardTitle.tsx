import React from 'react';
import styles from './CardTitle.module.scss';

interface ICardTitleProps extends React.ComponentProps<'div'> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	as?: any;
}

export const CardTitle = (props: ICardTitleProps): JSX.Element => {

	const { children, className, as: As = 'div', ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.cardTitle);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<As className={getCssClasses()} {...rest}>
			{children}
		</As>
	);
};
