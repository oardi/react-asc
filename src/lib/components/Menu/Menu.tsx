import React, { cloneElement, ReactElement, useRef, useState } from 'react';
import { MenuPosition } from './menu.types';
import { MenuContext, IMenuContext } from './MenuContext';
import { IMenuItemProps } from './MenuItem';
import { MenuBody } from './MenuBody';
import styles from './Menu.module.scss';

export interface IMenuProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggle?: ReactElement;
	children?: ReactElement<IMenuItemProps> | Array<ReactElement<IMenuItemProps>>;
	menuPosition?: MenuPosition;
	onToggleClick?: (e: Event) => void;
}

export const Menu = (props: IMenuProps) => {

	const { toggle, children, className, menuPosition, onToggleClick, ...rest } = props;

	const [isShow, setIsShow] = useState(false);
	const menuContainer = useRef<HTMLDivElement>(null);
	const toggleContainerRef = useRef<HTMLDivElement>(null);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.menu);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const menuContext: IMenuContext = {
		isShow: isShow,
		setIsShow: setIsShow
	}

	const handleClickToggle = (e: Event) => {
		e.stopPropagation();
		setIsShow(!isShow);
		onToggleClick && onToggleClick(e);
	}

	return (
		<MenuContext.Provider value={menuContext}>
			<div ref={menuContainer} className={getCssClasses()} {...rest}>

				<div ref={toggleContainerRef}>
					{toggle && cloneElement(toggle, { onClick: handleClickToggle })}
				</div>

				{isShow &&
					<MenuBody parentRef={toggleContainerRef} menuPosition={menuPosition}>
						{children}
					</MenuBody>
				}
			</div>
		</MenuContext.Provider>
	)
}
