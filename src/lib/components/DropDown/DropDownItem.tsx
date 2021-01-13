import React, { ReactNode } from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';

export interface IDropDownItemProps {
	key?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent) => void;
	type?: 'item' | 'header'
}

export const DropDownItem = ({ children, onClick, type = 'item' }: IDropDownItemProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		if (type === 'header') {
			cssClasses.push('dropdown-header');
		}
		if (type === 'item') {
			cssClasses.push('dropdown-item');
		}
		return cssClasses.join(' ');
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
					<a className={getCssClasses()} onClick={handleClick}>{children}</a>
				) :
				<div className={getCssClasses()} onClick={handleClick}>{children}</div>)
			)}
		>
			{children}
		</ConditionalWrapper>
	)
}
