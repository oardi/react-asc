import React, { ReactNode } from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';

export interface IDropDownItemProps {
	key?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent) => void;
	type?: 'item' | 'header'
}

export const DropDownItem = (props: IDropDownItemProps) => {

	const { children, onClick, type = 'item' } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		if (type === 'header') {
			cssClasses.push('dropdown-header');
		}
		if (type === 'item') {
			cssClasses.push('dropdown-item');
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
