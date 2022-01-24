import React, { ReactElement, useRef } from 'react';
import { MenuPosition } from './menu.types';
import { IMenuItemProps } from './MenuItem';
import { MenuBody } from './MenuBody';
import styles from './Menu.module.scss';

export interface IMenuProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggle?: ReactElement;
	open?: boolean;
	children?: ReactElement<IMenuItemProps> | Array<ReactElement<IMenuItemProps>>;
	menuPosition?: MenuPosition;
	onClickBackdrop?: () => void;
}

export const Menu = (props: IMenuProps) => {

	const { toggle, children, className, open, menuPosition, onClickBackdrop, ...rest } = props;

	const menuContainer = useRef<HTMLDivElement>(null);
	const toggleContainerRef = useRef<HTMLDivElement>(null);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.menu);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickBackdrop = () => {
		onClickBackdrop && onClickBackdrop();
	}

	return (
		<div ref={menuContainer} className={getCssClasses()} {...rest}>

			<div ref={toggleContainerRef}>
				{toggle}
			</div>

			{open &&
				<MenuBody
					parentRef={toggleContainerRef}
					menuPosition={menuPosition}
					onClickBackdrop={handleClickBackdrop}
				>
					{children}
				</MenuBody>
			}
		</div>
	)
}
