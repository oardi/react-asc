import React, { cloneElement, ReactElement, useRef, useState } from 'react';
import { MenuPosition } from './dropDown.types';
import { DropDownContext, IDropDownContext } from './DropdownContext';
import { IDropDownItemProps } from './DropDownItem';
import { DropDownMenu } from './DropDownMenu';

export interface IDropDownProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggle?: ReactElement;
	children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
	menuPosition?: MenuPosition;
	onToggleClick?: (e: Event) => void;
}

export const DropDown = (props: IDropDownProps) => {

	const { toggle, children, className, menuPosition, onToggleClick, ...rest } = props;

	const [isShow, setIsShow] = useState(false);
	const dropDownMenuConainter = useRef<HTMLDivElement>(null);
	const toggleContainerRef = useRef<HTMLDivElement>(null);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('dropdown');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

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
			<div ref={dropDownMenuConainter} className={getCssClasses()} {...rest}>

				<div ref={toggleContainerRef}>
					{toggle && cloneElement(toggle, { onClick: handleClickToggle })}
				</div>

				{isShow &&
					<DropDownMenu parentRef={toggleContainerRef} menuPosition={menuPosition}>
						{children}
					</DropDownMenu>
				}
			</div>
		</DropDownContext.Provider>
	)
}
