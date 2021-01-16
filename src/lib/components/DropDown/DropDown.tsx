import React, { cloneElement, ReactElement, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { MenuPosition } from './dropDown.types';
import { DropDownContext, IDropDownContext } from './DropdownContext';
import { IDropDownItemProps } from './DropDownItem';
import { DropDownMenu } from './DropDownMenu';

interface IDropDownProps {
	toggle?: ReactElement;
	children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
	menuPosition?: MenuPosition;
	onToggleClick?: (e: Event) => void;
}

export const DropDown = ({ toggle, children, menuPosition, onToggleClick }: IDropDownProps) => {

	const [isShow, setIsShow] = useState(false);
	const dropDownMenuConainter = useRef<HTMLDivElement>();

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
			<div ref={dropDownMenuConainter} className="dropdown">
				{cloneElement(toggle, { onClick: handleClickToggle })}

				{isShow &&
					<>
						<DropDownMenu menuPosition={menuPosition}>
							{children}
						</DropDownMenu>
						<Backdrop target={dropDownMenuConainter.current} isTransparent onClick={() => setIsShow(false)} />
					</>
				}
			</div>
		</DropDownContext.Provider>
	)
}
