import React, { cloneElement, Fragment, ReactElement, useRef, useState } from 'react';
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

export const DropDown = (props: IDropDownProps) => {

	const { toggle, children, menuPosition, onToggleClick } = props;

	const [isShow, setIsShow] = useState(false);
	const dropDownMenuConainter = useRef<HTMLDivElement>(null);

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

				{toggle && cloneElement(toggle, { onClick: handleClickToggle })}

				{isShow &&
					<Fragment>
						<DropDownMenu menuPosition={menuPosition}>
							{children}
						</DropDownMenu>
						<Backdrop target={dropDownMenuConainter.current as HTMLElement} isTransparent onClick={() => setIsShow(false)} />
					</Fragment>
				}
			</div>
		</DropDownContext.Provider>
	)
}
