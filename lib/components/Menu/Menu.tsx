import React, { ReactElement, useRef } from 'react';
import { MenuPosition } from './menu.types';
import { MenuBody } from './MenuBody';
import { IListItemProps } from '../List';

export interface IMenuProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggle?: ReactElement;
	open?: boolean;
	children?: ReactElement<IListItemProps> | ReactElement<IListItemProps>[];
	menuPosition?: MenuPosition;
	onClickBackdrop?: () => void;
}

export const Menu = (props: IMenuProps): JSX.Element => {

	const { toggle, children, className, open, menuPosition, onClickBackdrop, ...rest } = props;

	const menuContainer: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const toggleContainerRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickBackdrop = () => {
		onClickBackdrop && onClickBackdrop();
	};

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
	);
};
