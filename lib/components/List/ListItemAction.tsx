import React from 'react';
import styles from './ListItemAction.module.scss';

export const ListItemAction = ({ children, onClick, ...rest }: React.ComponentProps<'div'>): JSX.Element => {
	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.listItemAction);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
		onClick && onClick(e);
	};

	return (
		<div className={getCssClasses()} onClick={handleClick} {...rest}>
			{children}
		</div>
	);
};
