import React, { cloneElement, ReactElement, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { DropDownContext, IDropDownContext } from './DropdownContext';
import { IDropDownMenuProps } from './DropDownMenu';

interface IDropDownProps {
	toggle?: ReactElement;
	menu?: ReactElement<IDropDownMenuProps>;
	onToggleClick?: (e: Event) => void;
}

export const DropDown = ({ toggle, menu, onToggleClick }: IDropDownProps) => {

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
						{menu}
						<Backdrop target={dropDownMenuConainter.current} isTransparent onClick={() => setIsShow(false)} />
					</>
				}
			</div>
		</DropDownContext.Provider>
	)
}
