import React, { ReactElement, useContext } from 'react';
import { MenuPosition } from './dropDown.types';
import { DropDownContext } from './DropdownContext';
import { IDropDownItemProps } from './DropDownItem';

export interface IDropDownMenuProps {
	children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
	className?: string;
	menuPosition?: MenuPosition;
}

export const DropDownMenu = ({ children, className, menuPosition = 'left' }: IDropDownMenuProps) => {

	const { setIsShow } = useContext(DropDownContext)

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`dropdown-menu show`);
		if (menuPosition === 'right') {
			cssClasses.push(`dropdown-menu-right`);
		}
		cssClasses.push(className);
		return cssClasses.join(' ');
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
