import React, { ReactNode } from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import styles from './MenuItem.module.scss';
export interface IMenuItemProps {
	key?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent) => void;
	type?: 'item' | 'header'
}

export const MenuItem = (props: IMenuItemProps) => {

	const { children, onClick, type = 'item' } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.menuItem);
		if (type === 'header') {
			cssClasses.push(styles.menuItemHeader);
		}
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick && onClick(e);
	}

	return (
		<ConditionalWrapper
			condition={true}
			wrapper={children => (
				(type === 'item' ? (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a className={getCssClasses()} onClick={handleClick}>{children}</a>
				) :
					<div className={getCssClasses()} onClick={handleClick}>{children}</div>)
			)}
		>
			{children}
		</ConditionalWrapper>
	)
}
