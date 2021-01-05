import React, { cloneElement, ReactElement, ReactNode, useContext } from 'react';
import { DropDownBackdrop } from './DropDownBackdrop';
import { DropDownContext } from './DropdownContext';
import { IDropDownItemProps } from './DropDownItem';

interface IDropDownMenuProps {
	children?: ReactNode;
	className?: string;
	items?: Array<ReactElement>;
	menuPosition?: MenuPosition;
}

type MenuPosition = 'right' | 'left';

export const DropDownMenu = ({ items, children, className, menuPosition = 'left' }: IDropDownMenuProps) => {

	const { setIsShow } = useContext(DropDownContext);

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
		// TODO - trigger hide only if prop -> hide menu onItemClick === true?
		setIsShow(false);
	}

	return (
		<div className={getCssClasses()}>

			{items && !children ?
				items.map(item => cloneElement(item, {
					onClick: (e: Event) => {
						item.props.onClick && item.props.onClick(e);
						handleClickItem()
					},
					key: item.key
				}))
				: null}

			{children && !items ? children : null}

			<DropDownBackdrop onClick={handleClickItem} />
		</div>
	)
}
