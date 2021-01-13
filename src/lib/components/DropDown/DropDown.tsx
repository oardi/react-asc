import React, { cloneElement, ReactElement, useState } from 'react';
import { DropDownContext, IDropDownContext } from './DropdownContext';
import { IDropDownMenuProps } from './DropDownMenu';

interface IDropDownProps {
	toggle?: ReactElement;
	menu?: ReactElement<IDropDownMenuProps>;
	onToggleClick?: (e: Event) => void;
}

export const DropDown = ({ toggle, menu, onToggleClick }: IDropDownProps) => {

	const [isShow, setIsShow] = useState(false);

	const dropDownContext: IDropDownContext = {
		isShow: isShow,
		setIsShow: setIsShow
	}

	const handleClickToggle = (e: Event) => {
		e.stopPropagation();
		setIsShow(!isShow);
		onToggleClick && onToggleClick(e);
	}

	return (
		<DropDownContext.Provider value={dropDownContext}>
			<div className="dropdown">
				{cloneElement(toggle, { onClick: handleClickToggle })}
				{isShow ? menu : null}
			</div>
		</DropDownContext.Provider>
	)
}
