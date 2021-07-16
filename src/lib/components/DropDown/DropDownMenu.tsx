import React, { ReactElement, useContext } from 'react';
import { MenuPosition } from './dropDown.types';
import { DropDownContext } from './DropdownContext';
import { IDropDownItemProps } from './DropDownItem';

export interface IDropDownMenuProps {
	children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
	className?: string;
	menuPosition?: MenuPosition;
}

export const DropDownMenu = (props: IDropDownMenuProps) => {

	const { children, className = '', menuPosition = 'left' } = props;

	const { setIsShow } = useContext(DropDownContext)

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`dropdown-menu show`);
		if (menuPosition === 'right') {
			cssClasses.push(`dropdown-menu-right`);
		}
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClickItem = () => {
		setIsShow(false);
	}

	return (
		<div className={getCssClasses()}>

			{children &&

				React.Children.map(children, child => (
					React.cloneElement(child, {
						onClick: (e: React.MouseEvent) => {
							child.props.onClick && child.props.onClick(e);
							child.props.type !== 'header' && handleClickItem()
						}
					})
				))}

		</div>
	)
}
